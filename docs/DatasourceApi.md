# Askaiden.DatasourceApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDatasources**](DatasourceApi.md#createDatasources) | **POST** /api/v1/datasources | Create
[**deleteDatasource**](DatasourceApi.md#deleteDatasource) | **DELETE** /api/v1/datasources/{datasource_id} | Delete
[**getDatasource**](DatasourceApi.md#getDatasource) | **GET** /api/v1/datasources/{datasource_id} | Get
[**listDatasources**](DatasourceApi.md#listDatasources) | **GET** /api/v1/datasources | List
[**updateDatasource**](DatasourceApi.md#updateDatasource) | **PATCH** /api/v1/datasources/{datasource_id} | Update

<a name="createDatasources"></a>
# **createDatasources**
> AppModelsResponseDatasource createDatasources(body)

Create

Create a new datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let body = new Askaiden.AppModelsRequestDatasource(); // AppModelsRequestDatasource | 

apiInstance.createDatasources(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AppModelsRequestDatasource**](AppModelsRequestDatasource.md)|  | 

### Return type

[**AppModelsResponseDatasource**](AppModelsResponseDatasource.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDatasource"></a>
# **deleteDatasource**
> Object deleteDatasource(datasourceId)

Delete

Delete a specific datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let datasourceId = "datasourceId_example"; // String | 

apiInstance.deleteDatasource(datasourceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasourceId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDatasource"></a>
# **getDatasource**
> AppModelsResponseDatasource getDatasource(datasourceId)

Get

Get a specific datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let datasourceId = "datasourceId_example"; // String | 

apiInstance.getDatasource(datasourceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasourceId** | **String**|  | 

### Return type

[**AppModelsResponseDatasource**](AppModelsResponseDatasource.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDatasources"></a>
# **listDatasources**
> DatasourceList listDatasources()

List

List all datasources

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
apiInstance.listDatasources((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DatasourceList**](DatasourceList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDatasource"></a>
# **updateDatasource**
> AppModelsResponseDatasource updateDatasource(body, datasourceId)

Update

Update a specific datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let body = new Askaiden.AppModelsRequestDatasource(); // AppModelsRequestDatasource | 
let datasourceId = "datasourceId_example"; // String | 

apiInstance.updateDatasource(body, datasourceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AppModelsRequestDatasource**](AppModelsRequestDatasource.md)|  | 
 **datasourceId** | **String**|  | 

### Return type

[**AppModelsResponseDatasource**](AppModelsResponseDatasource.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

