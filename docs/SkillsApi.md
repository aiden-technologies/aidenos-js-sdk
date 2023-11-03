# Askaiden.SkillsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDatasourceApiV1SkillsSkillIdDatasourcesPost**](SkillsApi.md#addDatasourceApiV1SkillsSkillIdDatasourcesPost) | **POST** /api/v1/skills/{skill_id}/datasources | Add Datasource
[**addToolApiV1SkillsSkillIdToolsPost**](SkillsApi.md#addToolApiV1SkillsSkillIdToolsPost) | **POST** /api/v1/skills/{skill_id}/tools | Add Tool
[**createApiV1SkillsPost**](SkillsApi.md#createApiV1SkillsPost) | **POST** /api/v1/skills | Create
[**deleteApiV1SkillsSkillIdDelete**](SkillsApi.md#deleteApiV1SkillsSkillIdDelete) | **DELETE** /api/v1/skills/{skill_id} | Delete
[**getApiV1SkillsSkillIdGet**](SkillsApi.md#getApiV1SkillsSkillIdGet) | **GET** /api/v1/skills/{skill_id} | Get
[**invokeApiV1SkillsSkillIdInvokePost**](SkillsApi.md#invokeApiV1SkillsSkillIdInvokePost) | **POST** /api/v1/skills/{skill_id}/invoke | Invoke
[**listApiV1SkillsGet**](SkillsApi.md#listApiV1SkillsGet) | **GET** /api/v1/skills | List
[**listDatasourcesApiV1SkillsSkillIdDatasourcesGet**](SkillsApi.md#listDatasourcesApiV1SkillsSkillIdDatasourcesGet) | **GET** /api/v1/skills/{skill_id}/datasources | List Datasources
[**listRunsApiV1SkillsSkillIdRunsGet**](SkillsApi.md#listRunsApiV1SkillsSkillIdRunsGet) | **GET** /api/v1/skills/{skill_id}/runs | List Runs
[**listToolsApiV1SkillsSkillIdToolsGet**](SkillsApi.md#listToolsApiV1SkillsSkillIdToolsGet) | **GET** /api/v1/skills/{skill_id}/tools | List Tools
[**removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete**](SkillsApi.md#removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete) | **DELETE** /api/v1/skills/{skill_id}/datasources/{datasource_id} | Remove Datasource
[**removeToolApiV1SkillsSkillIdToolsToolIdDelete**](SkillsApi.md#removeToolApiV1SkillsSkillIdToolsToolIdDelete) | **DELETE** /api/v1/skills/{skill_id}/tools/{tool_id} | Remove Tool
[**updateApiV1SkillsSkillIdPatch**](SkillsApi.md#updateApiV1SkillsSkillIdPatch) | **PATCH** /api/v1/skills/{skill_id} | Update

<a name="addDatasourceApiV1SkillsSkillIdDatasourcesPost"></a>
# **addDatasourceApiV1SkillsSkillIdDatasourcesPost**
> AppModelsResponseSkill addDatasourceApiV1SkillsSkillIdDatasourcesPost(body, skillId)

Add Datasource

Add datasource to skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkillDatasource(); // AppModelsRequestSkillDatasource | 
let skillId = "skillId_example"; // String | 

apiInstance.addDatasourceApiV1SkillsSkillIdDatasourcesPost(body, skillId, (error, data, response) => {
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
 **body** | [**AppModelsRequestSkillDatasource**](AppModelsRequestSkillDatasource.md)|  | 
 **skillId** | **String**|  | 

### Return type

[**AppModelsResponseSkill**](AppModelsResponseSkill.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addToolApiV1SkillsSkillIdToolsPost"></a>
# **addToolApiV1SkillsSkillIdToolsPost**
> AppModelsResponseSkill addToolApiV1SkillsSkillIdToolsPost(body, skillId)

Add Tool

Add tool to skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkillTool(); // AppModelsRequestSkillTool | 
let skillId = "skillId_example"; // String | 

apiInstance.addToolApiV1SkillsSkillIdToolsPost(body, skillId, (error, data, response) => {
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
 **body** | [**AppModelsRequestSkillTool**](AppModelsRequestSkillTool.md)|  | 
 **skillId** | **String**|  | 

### Return type

[**AppModelsResponseSkill**](AppModelsResponseSkill.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createApiV1SkillsPost"></a>
# **createApiV1SkillsPost**
> AppModelsResponseSkill createApiV1SkillsPost(body)

Create

Create a new skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkill(); // AppModelsRequestSkill | 

apiInstance.createApiV1SkillsPost(body, (error, data, response) => {
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
 **body** | [**AppModelsRequestSkill**](AppModelsRequestSkill.md)|  | 

### Return type

[**AppModelsResponseSkill**](AppModelsResponseSkill.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApiV1SkillsSkillIdDelete"></a>
# **deleteApiV1SkillsSkillIdDelete**
> Object deleteApiV1SkillsSkillIdDelete(skillId)

Delete

Delete an skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.deleteApiV1SkillsSkillIdDelete(skillId, (error, data, response) => {
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
 **skillId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiV1SkillsSkillIdGet"></a>
# **getApiV1SkillsSkillIdGet**
> AppModelsResponseSkill getApiV1SkillsSkillIdGet(skillId)

Get

Get a single skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.getApiV1SkillsSkillIdGet(skillId, (error, data, response) => {
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
 **skillId** | **String**|  | 

### Return type

[**AppModelsResponseSkill**](AppModelsResponseSkill.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invokeApiV1SkillsSkillIdInvokePost"></a>
# **invokeApiV1SkillsSkillIdInvokePost**
> AppModelsResponseSkillInvoke invokeApiV1SkillsSkillIdInvokePost(body, skillId)

Invoke

Invoke an skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkillInvoke(); // AppModelsRequestSkillInvoke | 
let skillId = "skillId_example"; // String | 

apiInstance.invokeApiV1SkillsSkillIdInvokePost(body, skillId, (error, data, response) => {
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
 **body** | [**AppModelsRequestSkillInvoke**](AppModelsRequestSkillInvoke.md)|  | 
 **skillId** | **String**|  | 

### Return type

[**AppModelsResponseSkillInvoke**](AppModelsResponseSkillInvoke.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listApiV1SkillsGet"></a>
# **listApiV1SkillsGet**
> SkillList listApiV1SkillsGet()

List

List all skills

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
apiInstance.listApiV1SkillsGet((error, data, response) => {
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

[**SkillList**](SkillList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDatasourcesApiV1SkillsSkillIdDatasourcesGet"></a>
# **listDatasourcesApiV1SkillsSkillIdDatasourcesGet**
> SkillDatasosurceList listDatasourcesApiV1SkillsSkillIdDatasourcesGet(skillId)

List Datasources

List skill datasources

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.listDatasourcesApiV1SkillsSkillIdDatasourcesGet(skillId, (error, data, response) => {
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
 **skillId** | **String**|  | 

### Return type

[**SkillDatasosurceList**](SkillDatasosurceList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRunsApiV1SkillsSkillIdRunsGet"></a>
# **listRunsApiV1SkillsSkillIdRunsGet**
> SkillRunList listRunsApiV1SkillsSkillIdRunsGet(skillId)

List Runs

List skill runs

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.listRunsApiV1SkillsSkillIdRunsGet(skillId, (error, data, response) => {
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
 **skillId** | **String**|  | 

### Return type

[**SkillRunList**](SkillRunList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listToolsApiV1SkillsSkillIdToolsGet"></a>
# **listToolsApiV1SkillsSkillIdToolsGet**
> SkillToolList listToolsApiV1SkillsSkillIdToolsGet(skillId)

List Tools

List skill tools

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.listToolsApiV1SkillsSkillIdToolsGet(skillId, (error, data, response) => {
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
 **skillId** | **String**|  | 

### Return type

[**SkillToolList**](SkillToolList.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete"></a>
# **removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete**
> Object removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete(skillId, datasourceId)

Remove Datasource

Remove datasource from skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 
let datasourceId = "datasourceId_example"; // String | 

apiInstance.removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete(skillId, datasourceId, (error, data, response) => {
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
 **skillId** | **String**|  | 
 **datasourceId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeToolApiV1SkillsSkillIdToolsToolIdDelete"></a>
# **removeToolApiV1SkillsSkillIdToolsToolIdDelete**
> Object removeToolApiV1SkillsSkillIdToolsToolIdDelete(skillId, toolId)

Remove Tool

Remove tool from skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 
let toolId = "toolId_example"; // String | 

apiInstance.removeToolApiV1SkillsSkillIdToolsToolIdDelete(skillId, toolId, (error, data, response) => {
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
 **skillId** | **String**|  | 
 **toolId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApiV1SkillsSkillIdPatch"></a>
# **updateApiV1SkillsSkillIdPatch**
> AppModelsResponseSkill updateApiV1SkillsSkillIdPatch(body, skillId)

Update

Patch an skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkill(); // AppModelsRequestSkill | 
let skillId = "skillId_example"; // String | 

apiInstance.updateApiV1SkillsSkillIdPatch(body, skillId, (error, data, response) => {
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
 **body** | [**AppModelsRequestSkill**](AppModelsRequestSkill.md)|  | 
 **skillId** | **String**|  | 

### Return type

[**AppModelsResponseSkill**](AppModelsResponseSkill.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

