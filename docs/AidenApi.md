# Askaiden.AidenApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAidenStep**](AidenApi.md#addAidenStep) | **POST** /api/v1/aiden/{aiden_id}/steps | Add Step
[**createAiden**](AidenApi.md#createAiden) | **POST** /api/v1/aiden | Create
[**deleteAiden**](AidenApi.md#deleteAiden) | **DELETE** /api/v1/aiden/{aiden_id} | Delete
[**deleteAidenStep**](AidenApi.md#deleteAidenStep) | **DELETE** /api/v1/aiden/{aiden_id}/steps/{step_id} | Delete Step
[**getAiden**](AidenApi.md#getAiden) | **GET** /api/v1/aiden/{aiden_id} | Get
[**invokeAiden**](AidenApi.md#invokeAiden) | **POST** /api/v1/aiden/{aiden_id}/invoke | Invoke
[**listAidenSteps**](AidenApi.md#listAidenSteps) | **GET** /api/v1/aiden/{aiden_id}/steps | List Steps
[**listAidens**](AidenApi.md#listAidens) | **GET** /api/v1/aiden | List
[**updateAiden**](AidenApi.md#updateAiden) | **PATCH** /api/v1/aiden/{aiden_id} | Update

<a name="addAidenStep"></a>
# **addAidenStep**
> AppModelsResponseAiden addAidenStep(body, aidenId)

Add Step

Create a new aiden step

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AppModelsRequestAidenStep(); // AppModelsRequestAidenStep | 
let aidenId = "aidenId_example"; // String | 

apiInstance.addAidenStep(body, aidenId, (error, data, response) => {
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

<a name="createAiden"></a>
# **createAiden**
> AppModelsResponseAiden createAiden(body)

Create

Create a new aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AppModelsRequestAiden(); // AppModelsRequestAiden | 

apiInstance.createAiden(body, (error, data, response) => {
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

<a name="deleteAiden"></a>
# **deleteAiden**
> Object deleteAiden(aidenId)

Delete

Delete a specific aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 

apiInstance.deleteAiden(aidenId, (error, data, response) => {
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

<a name="deleteAidenStep"></a>
# **deleteAidenStep**
> Object deleteAidenStep(aidenId, stepId)

Delete Step

Delete a specific aiden step

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 
let stepId = "stepId_example"; // String | 

apiInstance.deleteAidenStep(aidenId, stepId, (error, data, response) => {
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

<a name="getAiden"></a>
# **getAiden**
> AppModelsResponseAiden getAiden(aidenId)

Get

Get a single aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 

apiInstance.getAiden(aidenId, (error, data, response) => {
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

<a name="invokeAiden"></a>
# **invokeAiden**
> Object invokeAiden(body, aidenId)

Invoke

Invoke a specific aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AidenInvoke(); // AidenInvoke | 
let aidenId = "aidenId_example"; // String | 

apiInstance.invokeAiden(body, aidenId, (error, data, response) => {
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

<a name="listAidenSteps"></a>
# **listAidenSteps**
> AidenList listAidenSteps(aidenId)

List Steps

List all steps of a aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let aidenId = "aidenId_example"; // String | 

apiInstance.listAidenSteps(aidenId, (error, data, response) => {
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

<a name="listAidens"></a>
# **listAidens**
> AidenList listAidens()

List

List all aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
apiInstance.listAidens((error, data, response) => {
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

<a name="updateAiden"></a>
# **updateAiden**
> AppModelsResponseAiden updateAiden(body, aidenId)

Update

Patch a aiden

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.AidenApi();
let body = new Askaiden.AppModelsRequestAiden(); // AppModelsRequestAiden | 
let aidenId = "aidenId_example"; // String | 

apiInstance.updateAiden(body, aidenId, (error, data, response) => {
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

