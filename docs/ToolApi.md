# Askaiden.ToolApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiV1ToolsPost**](ToolApi.md#createApiV1ToolsPost) | **POST** /api/v1/tools | Create
[**deleteApiV1ToolsToolIdDelete**](ToolApi.md#deleteApiV1ToolsToolIdDelete) | **DELETE** /api/v1/tools/{tool_id} | Delete
[**getApiV1ToolsToolIdGet**](ToolApi.md#getApiV1ToolsToolIdGet) | **GET** /api/v1/tools/{tool_id} | Get
[**listApiV1ToolsGet**](ToolApi.md#listApiV1ToolsGet) | **GET** /api/v1/tools | List
[**updateApiV1ToolsToolIdPatch**](ToolApi.md#updateApiV1ToolsToolIdPatch) | **PATCH** /api/v1/tools/{tool_id} | Update

<a name="createApiV1ToolsPost"></a>
# **createApiV1ToolsPost**
> AppModelsResponseTool createApiV1ToolsPost(body)

Create

Create a new tool

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
let body = new Askaiden.AppModelsRequestTool(); // AppModelsRequestTool | 

apiInstance.createApiV1ToolsPost(body, (error, data, response) => {
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
 **body** | [**AppModelsRequestTool**](AppModelsRequestTool.md)|  | 

### Return type

[**AppModelsResponseTool**](AppModelsResponseTool.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApiV1ToolsToolIdDelete"></a>
# **deleteApiV1ToolsToolIdDelete**
> Object deleteApiV1ToolsToolIdDelete(toolId)

Delete

Delete a specific tool

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
let toolId = "toolId_example"; // String | 

apiInstance.deleteApiV1ToolsToolIdDelete(toolId, (error, data, response) => {
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
 **toolId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiV1ToolsToolIdGet"></a>
# **getApiV1ToolsToolIdGet**
> AppModelsResponseTool getApiV1ToolsToolIdGet(toolId)

Get

Get a specific tool

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
let toolId = "toolId_example"; // String | 

apiInstance.getApiV1ToolsToolIdGet(toolId, (error, data, response) => {
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
 **toolId** | **String**|  | 

### Return type

[**AppModelsResponseTool**](AppModelsResponseTool.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApiV1ToolsGet"></a>
# **listApiV1ToolsGet**
> ToolList listApiV1ToolsGet()

List

List all tools

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
apiInstance.listApiV1ToolsGet((error, data, response) => {
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

[**ToolList**](ToolList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApiV1ToolsToolIdPatch"></a>
# **updateApiV1ToolsToolIdPatch**
> AppModelsResponseTool updateApiV1ToolsToolIdPatch(body, toolId)

Update

Update a specific tool

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
let body = new Askaiden.AppModelsRequestTool(); // AppModelsRequestTool | 
let toolId = "toolId_example"; // String | 

apiInstance.updateApiV1ToolsToolIdPatch(body, toolId, (error, data, response) => {
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
 **body** | [**AppModelsRequestTool**](AppModelsRequestTool.md)|  | 
 **toolId** | **String**|  | 

### Return type

[**AppModelsResponseTool**](AppModelsResponseTool.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

