# Askaiden.ToolApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTools**](ToolApi.md#createTools) | **POST** /api/v1/tools | Create
[**deleteTool**](ToolApi.md#deleteTool) | **DELETE** /api/v1/tools/{tool_id} | Delete
[**getApiV1ToolsToolIdGet**](ToolApi.md#getApiV1ToolsToolIdGet) | **GET** /api/v1/tools/{tool_id} | Get
[**listTools**](ToolApi.md#listTools) | **GET** /api/v1/tools | List
[**updateApiV1ToolsToolIdPatch**](ToolApi.md#updateApiV1ToolsToolIdPatch) | **PATCH** /api/v1/tools/{tool_id} | Update

<a name="createTools"></a>
# **createTools**
> AppModelsResponseTool createTools(body)

Create

Create a new tool

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
let body = new Askaiden.AppModelsRequestTool(); // AppModelsRequestTool | 

apiInstance.createTools(body, (error, data, response) => {
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

<a name="deleteTool"></a>
# **deleteTool**
> Object deleteTool(toolId)

Delete

Delete a specific tool

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
let toolId = "toolId_example"; // String | 

apiInstance.deleteTool(toolId, (error, data, response) => {
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

<a name="listTools"></a>
# **listTools**
> ToolList listTools()

List

List all tools

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ToolApi();
apiInstance.listTools((error, data, response) => {
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

