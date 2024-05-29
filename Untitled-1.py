# %%
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# %%
# Iris veri setini yükle
data = pd.read_csv("https://archive.ics.uci.edu/dataset/53/irisiris.csv")

# Verileri X ve y olarak ayır
X = data[["sepal_length", "sepal_width", "petal_length", "petal_width"]]
y = data["species"]


# %%
# Eğitim ve test veri kümelerini ayır
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)


# %%
# Karar ağacı modelini oluştur
model = DecisionTreeClassifier()

# Modeli eğitim verisi üzerinde eğit
model.fit(X_train, y_train)


# %%
# Tahminleri yap
y_pred = model.predict(X_test)

# Doğruluk puanını hesapla
accuracy = accuracy_score(y_test, y_pred)

print("Doğruluk:", accuracy)



