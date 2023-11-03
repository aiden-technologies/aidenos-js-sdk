# Askaiden.SkillsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDatasource**](SkillsApi.md#addDatasource) | **POST** /api/v1/skills/{skill_id}/datasources | Add Datasource
[**addSkillTool**](SkillsApi.md#addSkillTool) | **POST** /api/v1/skills/{skill_id}/tools | Add Tool
[**createSkill**](SkillsApi.md#createSkill) | **POST** /api/v1/skills | Create
[**deleteSkill**](SkillsApi.md#deleteSkill) | **DELETE** /api/v1/skills/{skill_id} | Delete
[**getSkill**](SkillsApi.md#getSkill) | **GET** /api/v1/skills/{skill_id} | Get
[**invokeSkill**](SkillsApi.md#invokeSkill) | **POST** /api/v1/skills/{skill_id}/invoke | Invoke
[**listRuns**](SkillsApi.md#listRuns) | **GET** /api/v1/skills/{skill_id}/runs | List Runs
[**listSkillDatasources**](SkillsApi.md#listSkillDatasources) | **GET** /api/v1/skills/{skill_id}/datasources | List Datasources
[**listSkillTools**](SkillsApi.md#listSkillTools) | **GET** /api/v1/skills/{skill_id}/tools | List Tools
[**listSkills**](SkillsApi.md#listSkills) | **GET** /api/v1/skills | List
[**removeDatasource**](SkillsApi.md#removeDatasource) | **DELETE** /api/v1/skills/{skill_id}/datasources/{datasource_id} | Remove Datasource
[**removeTool**](SkillsApi.md#removeTool) | **DELETE** /api/v1/skills/{skill_id}/tools/{tool_id} | Remove Tool
[**updateSkill**](SkillsApi.md#updateSkill) | **PATCH** /api/v1/skills/{skill_id} | Update

<a name="addDatasource"></a>
# **addDatasource**
> AppModelsResponseSkill addDatasource(body, skillId)

Add Datasource

Add datasource to skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkillDatasource(); // AppModelsRequestSkillDatasource | 
let skillId = "skillId_example"; // String | 

apiInstance.addDatasource(body, skillId, (error, data, response) => {
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

<a name="addSkillTool"></a>
# **addSkillTool**
> AppModelsResponseSkill addSkillTool(body, skillId)

Add Tool

Add tool to skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkillTool(); // AppModelsRequestSkillTool | 
let skillId = "skillId_example"; // String | 

apiInstance.addSkillTool(body, skillId, (error, data, response) => {
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

<a name="createSkill"></a>
# **createSkill**
> AppModelsResponseSkill createSkill(body)

Create

Create a new skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkill(); // AppModelsRequestSkill | 

apiInstance.createSkill(body, (error, data, response) => {
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

<a name="deleteSkill"></a>
# **deleteSkill**
> Object deleteSkill(skillId)

Delete

Delete an skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.deleteSkill(skillId, (error, data, response) => {
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

<a name="getSkill"></a>
# **getSkill**
> AppModelsResponseSkill getSkill(skillId)

Get

Get a single skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.getSkill(skillId, (error, data, response) => {
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

<a name="invokeSkill"></a>
# **invokeSkill**
> AppModelsResponseSkillInvoke invokeSkill(body, skillId)

Invoke

Invoke an skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkillInvoke(); // AppModelsRequestSkillInvoke | 
let skillId = "skillId_example"; // String | 

apiInstance.invokeSkill(body, skillId, (error, data, response) => {
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

<a name="listRuns"></a>
# **listRuns**
> SkillRunList listRuns(skillId)

List Runs

List skill runs

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.listRuns(skillId, (error, data, response) => {
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

<a name="listSkillDatasources"></a>
# **listSkillDatasources**
> SkillDatasosurceList listSkillDatasources(skillId)

List Datasources

List skill datasources

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.listSkillDatasources(skillId, (error, data, response) => {
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

<a name="listSkillTools"></a>
# **listSkillTools**
> SkillToolList listSkillTools(skillId)

List Tools

List skill tools

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 

apiInstance.listSkillTools(skillId, (error, data, response) => {
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

<a name="listSkills"></a>
# **listSkills**
> SkillList listSkills()

List

List all skills

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
apiInstance.listSkills((error, data, response) => {
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

<a name="removeDatasource"></a>
# **removeDatasource**
> Object removeDatasource(skillId, datasourceId)

Remove Datasource

Remove datasource from skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 
let datasourceId = "datasourceId_example"; // String | 

apiInstance.removeDatasource(skillId, datasourceId, (error, data, response) => {
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

<a name="removeTool"></a>
# **removeTool**
> Object removeTool(skillId, toolId)

Remove Tool

Remove tool from skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let skillId = "skillId_example"; // String | 
let toolId = "toolId_example"; // String | 

apiInstance.removeTool(skillId, toolId, (error, data, response) => {
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

<a name="updateSkill"></a>
# **updateSkill**
> AppModelsResponseSkill updateSkill(body, skillId)

Update

Patch an skill

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.SkillsApi();
let body = new Askaiden.AppModelsRequestSkill(); // AppModelsRequestSkill | 
let skillId = "skillId_example"; // String | 

apiInstance.updateSkill(body, skillId, (error, data, response) => {
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

