# Askaiden.DatasourceApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiV1DatasourcesPost**](DatasourceApi.md#createApiV1DatasourcesPost) | **POST** /api/v1/datasources | Create
[**deleteApiV1DatasourcesDatasourceIdDelete**](DatasourceApi.md#deleteApiV1DatasourcesDatasourceIdDelete) | **DELETE** /api/v1/datasources/{datasource_id} | Delete
[**getApiV1DatasourcesDatasourceIdGet**](DatasourceApi.md#getApiV1DatasourcesDatasourceIdGet) | **GET** /api/v1/datasources/{datasource_id} | Get
[**listApiV1DatasourcesGet**](DatasourceApi.md#listApiV1DatasourcesGet) | **GET** /api/v1/datasources | List
[**updateApiV1DatasourcesDatasourceIdPatch**](DatasourceApi.md#updateApiV1DatasourcesDatasourceIdPatch) | **PATCH** /api/v1/datasources/{datasource_id} | Update

<a name="createApiV1DatasourcesPost"></a>
# **createApiV1DatasourcesPost**
> AppModelsResponseDatasource createApiV1DatasourcesPost(body)

Create

Create a new datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let body = new Askaiden.AppModelsRequestDatasource(); // AppModelsRequestDatasource | 

apiInstance.createApiV1DatasourcesPost(body, (error, data, response) => {
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

<a name="deleteApiV1DatasourcesDatasourceIdDelete"></a>
# **deleteApiV1DatasourcesDatasourceIdDelete**
> Object deleteApiV1DatasourcesDatasourceIdDelete(datasourceId)

Delete

Delete a specific datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let datasourceId = "datasourceId_example"; // String | 

apiInstance.deleteApiV1DatasourcesDatasourceIdDelete(datasourceId, (error, data, response) => {
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

<a name="getApiV1DatasourcesDatasourceIdGet"></a>
# **getApiV1DatasourcesDatasourceIdGet**
> AppModelsResponseDatasource getApiV1DatasourcesDatasourceIdGet(datasourceId)

Get

Get a specific datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let datasourceId = "datasourceId_example"; // String | 

apiInstance.getApiV1DatasourcesDatasourceIdGet(datasourceId, (error, data, response) => {
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

<a name="listApiV1DatasourcesGet"></a>
# **listApiV1DatasourcesGet**
> DatasourceList listApiV1DatasourcesGet()

List

List all datasources

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
apiInstance.listApiV1DatasourcesGet((error, data, response) => {
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

<a name="updateApiV1DatasourcesDatasourceIdPatch"></a>
# **updateApiV1DatasourcesDatasourceIdPatch**
> AppModelsResponseDatasource updateApiV1DatasourcesDatasourceIdPatch(body, datasourceId)

Update

Update a specific datasource

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.DatasourceApi();
let body = new Askaiden.AppModelsRequestDatasource(); // AppModelsRequestDatasource | 
let datasourceId = "datasourceId_example"; // String | 

apiInstance.updateApiV1DatasourcesDatasourceIdPatch(body, datasourceId, (error, data, response) => {
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

