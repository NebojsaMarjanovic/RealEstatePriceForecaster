# RealEstatePriceForecaster
RealEstatePriceForecaster is a full-stack application that enables users to do predictions and calculations of real estate market prices. The core business logic is implemented using .NET 6 combined with ML.NET and is contained in folder named *Backend*. The component-based UI is implemented using React and is inside the *Frontend* folder.

##Project architecture

The architecture used for this project is three-tier architecture combined with microservice architecture, with the layers:
1. User interface - which enables user to communicate with the application,
2. Application logic - which encapsulates the core logic of application, including predictive components as microservices, used for making predictions and calculation of real estate market prices,
3. Database - for storing real estate market data.

Predictive components are implemented using microservices architecure, where each of microservices are the abstraction of machine learning models. This project consists of two predictive microservices:
1. microservice for making predictions of future real estate market prices trends, based on analysis of historical data and
2. microservice for making calculation based of real estate characteristics.

In the next picture, you can take a look at this architecture

<p align="center">
<img width="649" alt="arhitektura" src="https://github.com/NebojsaMarjanovic/RealEstatePriceForecaster/assets/74599737/620d7f6d-7348-47b7-bf26-b5de25de7631">
</p>

