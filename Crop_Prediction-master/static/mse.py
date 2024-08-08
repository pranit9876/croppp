from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import pandas as pd

# Load the dataset
df = pd.read_csv('/Crop_Prediction-master/static/Arhar.csv')
print(df)
# Split the dataset into training and testing sets
train = df[df['year'] < 2022]
test = df[df['year'] == 2022]

# Define the features and target variable
features = ['month', 'year', 'rainfall']
target = 'wpi'

# Create a Random Forest regression model
model = RandomForestRegressor()

# Train the model on the training set
model.fit(train[features], train[target])

# Make predictions for the test set
predictions = model.predict(test[features])

# Evaluate the performance of the model using the mean squared error (MSE)
mse = mean_squared_error(test[target], predictions)

print("MSE: ", mse)
