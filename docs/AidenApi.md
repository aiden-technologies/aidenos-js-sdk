# Askaiden.AidenApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStepApiV1AidenAidenIdStepsPost**](AidenApi.md#addStepApiV1AidenAidenIdStepsPost) | **POST** /api/v1/aiden/{aiden_id}/steps | Add Step
[**createApiV1AidenPost**](AidenApi.md#createApiV1AidenPost) | **POST** /api/v1/aiden | Create
[**deleteApiV1AidenAidenIdDelete**](AidenApi.md#deleteApiV1AidenAidenIdDelete) | **DELETE** /api/v1/aiden/{aiden_id} | Delete
[**deleteStepApiV1AidenAidenIdStepsStepIdDelete**](AidenApi.md#deleteStepApiV1AidenAidenIdStepsStepIdDelete) | **DELETE** /api/v1/aiden/{aiden_id}/steps/{step_id} | Delete Step
[**getApiV1AidenAidenIdGet**](AidenApi.md#getApiV1AidenAidenIdGet) | **GET** /api/v1/aiden/{aiden_id} | Get
[**invokeApiV1AidenAidenIdInvokePost**](AidenApi.md#invokeApiV1AidenAidenIdInvokePost) | **POST** /api/v1/aiden/{aiden_id}/invoke | Invoke
[**listApiV1AidenGet**](AidenApi.md#listApiV1AidenGet) | **GET** /api/v1/aiden | List
[**listStepsApiV1AidenAidenIdStepsGet**](AidenApi.md#listStepsApiV1AidenAidenIdStepsGet) | **GET** /api/v1/aiden/{aiden_id}/steps | List Steps
[**updateApiV1AidenAidenIdPatch**](AidenApi.md#updateApiV1AidenAidenIdPatch) | **PATCH** /api/v1/aiden/{aiden_id} | Update

<a name="addStepApiV1AidenAidenIdStepsPost"></a>
# **addStepApiV1AidenAidenIdStepsPost**
> AppModelsResponseAiden addStepApiV1AidenAidenIdStepsPost(body, aidenId)

Add Step

Create a new aiden step

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AppModelsRequestAidenStep(); // AppModelsRequestAidenStep | 
let aidenId = "aidenId_example"; // String | 

apiInstance.addStepApiV1AidenAidenIdStepsPost(body, aidenId, (error, data, response) => {
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
 **body** | [**AppModelsRequestAidenStep**](AppModelsRequestAidenStep.md)|  | 
 **aidenId** | **String**|  | 

### Return type

[**AppModelsResponseAiden**](AppModelsResponseAiden.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createApiV1AidenPost"></a>
# **createApiV1AidenPost**
> AppModelsResponseAiden createApiV1AidenPost(body)

Create

Create a new aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AppModelsRequestAiden(); // AppModelsRequestAiden | 

apiInstance.createApiV1AidenPost(body, (error, data, response) => {
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
 **body** | [**AppModelsRequestAiden**](AppModelsRequestAiden.md)|  | 

### Return type

[**AppModelsResponseAiden**](AppModelsResponseAiden.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApiV1AidenAidenIdDelete"></a>
# **deleteApiV1AidenAidenIdDelete**
> Object deleteApiV1AidenAidenIdDelete(aidenId)

Delete

Delete a specific aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 

apiInstance.deleteApiV1AidenAidenIdDelete(aidenId, (error, data, response) => {
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
 **aidenId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteStepApiV1AidenAidenIdStepsStepIdDelete"></a>
# **deleteStepApiV1AidenAidenIdStepsStepIdDelete**
> Object deleteStepApiV1AidenAidenIdStepsStepIdDelete(aidenId, stepId)

Delete Step

Delete a specific aiden step

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 
let stepId = "stepId_example"; // String | 

apiInstance.deleteStepApiV1AidenAidenIdStepsStepIdDelete(aidenId, stepId, (error, data, response) => {
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
 **aidenId** | **String**|  | 
 **stepId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiV1AidenAidenIdGet"></a>
# **getApiV1AidenAidenIdGet**
> AppModelsResponseAiden getApiV1AidenAidenIdGet(aidenId)

Get

Get a single aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 

apiInstance.getApiV1AidenAidenIdGet(aidenId, (error, data, response) => {
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
 **aidenId** | **String**|  | 

### Return type

[**AppModelsResponseAiden**](AppModelsResponseAiden.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invokeApiV1AidenAidenIdInvokePost"></a>
# **invokeApiV1AidenAidenIdInvokePost**
> Object invokeApiV1AidenAidenIdInvokePost(body, aidenId)

Invoke

Invoke a specific aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AidenInvoke(); // AidenInvoke | 
let aidenId = "aidenId_example"; // String | 

apiInstance.invokeApiV1AidenAidenIdInvokePost(body, aidenId, (error, data, response) => {
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
 **body** | [**AidenInvoke**](AidenInvoke.md)|  | 
 **aidenId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listApiV1AidenGet"></a>
# **listApiV1AidenGet**
> AidenList listApiV1AidenGet()

List

List all aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
apiInstance.listApiV1AidenGet((error, data, response) => {
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

[**AidenList**](AidenList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listStepsApiV1AidenAidenIdStepsGet"></a>
# **listStepsApiV1AidenAidenIdStepsGet**
> AidenList listStepsApiV1AidenAidenIdStepsGet(aidenId)

List Steps

List all steps of a aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 

apiInstance.listStepsApiV1AidenAidenIdStepsGet(aidenId, (error, data, response) => {
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
 **aidenId** | **String**|  | 

### Return type

[**AidenList**](AidenList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApiV1AidenAidenIdPatch"></a>
# **updateApiV1AidenAidenIdPatch**
> AppModelsResponseAiden updateApiV1AidenAidenIdPatch(body, aidenId)

Update

Patch a aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AppModelsRequestAiden(); // AppModelsRequestAiden | 
let aidenId = "aidenId_example"; // String | 

apiInstance.updateApiV1AidenAidenIdPatch(body, aidenId, (error, data, response) => {
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
 **body** | [**AppModelsRequestAiden**](AppModelsRequestAiden.md)|  | 
 **aidenId** | **String**|  | 

### Return type

[**AppModelsResponseAiden**](AppModelsResponseAiden.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

