import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import number from "numeral";

export default function GlobeComponent() {
    const [setHoverD] = useState();
    const globeEl = useRef();
    const [globeData, setGlobeData] = useState({
        countries: { features: [] },
        points: { features: [] }
    });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const csvResponse = await fetch("air_index.csv");
                const csvText = await csvResponse.text();
                const selectedColumns = ["Countries", "2022"];
                const parsedData = parseCSV(csvText, selectedColumns);
                displayData(parsedData, selectedColumns);

                const geoJsonResponse = await fetch("https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson");
                const geoJsonData = await geoJsonResponse.json();
                setGlobeData({ countries: geoJsonData[0], points: geoJsonData[1] });

                setData(parsedData);
                setLoading(false);
            } catch (error) {
                console.error("Error loading data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (globeEl.current !== undefined) {
            const scene = globeEl.current.scene();
            if (scene.children.length === 4) {
                scene.children[1].intensity = 1.5;
                scene.children[2].visible = false;
            }

            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.controls().enableZoom = true;
        }
    }, [globeData]);

    let lookup = {};
    for (let i = 0; i < data.length; i++) {
        if (!lookup[data[i][0]]) {
            lookup[data[i][0]] = parseInt(data[i][1], 10); 
        }
    }

    function parseCSV(data, selectedColumns) {
        const rows = data.split("\n");
        const headers = rows[0].split(",");
        const selectedIndices = selectedColumns.map((col) => headers.indexOf(col));

        const result = rows.slice(1).map((row) => {
            const values = row.split(",");
            const selectedValues = selectedIndices.map((i) => values[i]);
            return selectedValues;
        });

        return result;
    }

    function displayData(data, selectedColumns) {
        console.log("Seçilen Sütunlar:", selectedColumns);
        data.forEach((row) => {
            console.log(row.join(", "));
        });
    }

    const getColor = (rank) => {
        if (rank <= 25) return "#DD6262FF"; 
        if (rank <= 50) return "#DD3131FF"; 
        if (rank <= 75) return "#CE0000FF"; 
        return "#890000FF"; 
    };

    const getLabel = (rank) => {
        if (rank <= 25) return " İyi"; 
        if (rank <= 50) return " Orta"; 
        if (rank <= 75) return " Hassas gruplar için Sağlıksız "; 
        return " Sağlıksız"; 
    };

    return (
        <div>
            {loading && <div>Yükleniyor...</div>}
            {!loading && (
                <Globe
                    ref={globeEl}
                    backgroundColor="#F6F7FB"
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    showAtmosphere={true}
                    polygonsData={globeData.countries.features}
                    polygonStrokeColor={() => "#A4B0BB"}
                    polygonSideColor={() => "rgba(222,225,228,.6)"}
                    onPolygonHover={setHoverD}
                    polygonCapColor={({ properties: d }) => {
                        const rank = lookup[d.ADMIN];
                        return getColor(rank);
                    }}
                    polygonLabel={({ properties: d }) => {
                        const rank = lookup[d.ADMIN];
                        const label = getLabel(rank);
                        return `
                            <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #fff;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px; text-align: left;">
                                <div style="font-family: 'Open sans', sans-serif; margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
                                    ${d.ADMIN}
                                </div>
                                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                                    Population: ${number(d.POP_EST).format("0a")}
                                </div>
                                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                                    Air Quality Index : ${rank} (${label})
                                </div>
                            </div>
                        `;
                    }}
                    labelsData={globeData.points.features}
                    labelLat={(d) => d.properties.latitude}
                    labelLng={(d) => d.properties.longitude}
                    labelAltitude={(d) => (d.properties.type === "order" ? 0.015 : 0.013)}
                    labelText={(d) => ""}
                    labelSize={(d) => 0.6}
                    labelDotRadius={(d) => 0.6}
                    labelColor={(d) => (d.properties.type === "order" ? "#5A68BD" : "#51CB90")}
                    labelResolution={2}
                />
            )}
        </div>
    );
}
