import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import number from "numeral";
import chroma from "chroma-js";

export default function GlobeComponent() {
    const [hoverD, setHoverD] = useState();
    const globeEl = useRef();
    const [globeData, setGlobeData] = useState({
        countries: { features: [] },
        points: { features: [] }
    });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const colorScale = chroma.scale(['#8B0000', '#B22222', '#DC143C', '#FF6347', '#FFA07A', '#FFDAB9']).mode('lab');


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // CSV dosyasını çekme
                const csvResponse = await fetch("air_index.csv");
                const csvText = await csvResponse.text();
                const selectedColumns = ["Countries", "Rank"]; // Görüntülemek istediğiniz sütun isimleri
                const parsedData = parseCSV(csvText, selectedColumns);
                displayData(parsedData, selectedColumns);

                // Globe verisini çekme
                const geoJsonResponse = await fetch("https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson");
                const geoJsonData = await geoJsonResponse.json();
                setGlobeData({ countries: geoJsonData[0], points: geoJsonData[1] });

                // CSV verisini duruma kaydetme
                setData(parsedData);
                setLoading(false);
            } catch (error) {
                console.error("Veri yüklenirken hata oluştu:", error);
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
    let maxRank = 0;
    for (let i = 0; i < data.length; i++) {
        if (!lookup[data[i][0]]) {
            lookup[data[i][0]] = data[i][1]; // `Countries` değeri data[i][0], `Rank` değeri data[i][1] olacak şekilde ayarladım
            if (data[i][1] > maxRank) {
                maxRank = data[i][1];
            }
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
                        const normalizedRank = rank / maxRank;
                        return colorScale(normalizedRank).hex();
                    }}
                    polygonLabel={({ properties: d }) => {
                        const rank = lookup[d.ADMIN];
                        return `
                            <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #fff;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px; text-align: left;">
                                <div style="font-family: 'Open sans', sans-serif; margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
                                    ${d.ADMIN}
                                </div>
                                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                                    Nüfus Sayısı: ${number(d.POP_EST).format("0a")}
                                </div>
                                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                                    Hava Kalite Endeks Sıralaması: ${rank}
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
