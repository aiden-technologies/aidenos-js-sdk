# askaiden

Askaiden - JavaScript client for askaiden
The operating system to build AI Tutors
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.5
- Package version: 0.0.5
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install askaiden --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Askaiden = require('askaiden');
var defaultClient = Askaiden.ApiClient.instance;


var api = new Askaiden.AidenApi()
var body = new Askaiden.AppModelsRequestAidenStep(); // {AppModelsRequestAidenStep} 
var aidenId = "aidenId_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addStepApiV1AidenAidenIdStepsPost(body, aidenId, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Askaiden.AidenApi* | [**addStepApiV1AidenAidenIdStepsPost**](docs/AidenApi.md#addStepApiV1AidenAidenIdStepsPost) | **POST** /api/v1/aiden/{aiden_id}/steps | Add Step
*Askaiden.AidenApi* | [**createApiV1AidenPost**](docs/AidenApi.md#createApiV1AidenPost) | **POST** /api/v1/aiden | Create
*Askaiden.AidenApi* | [**deleteApiV1AidenAidenIdDelete**](docs/AidenApi.md#deleteApiV1AidenAidenIdDelete) | **DELETE** /api/v1/aiden/{aiden_id} | Delete
*Askaiden.AidenApi* | [**deleteStepApiV1AidenAidenIdStepsStepIdDelete**](docs/AidenApi.md#deleteStepApiV1AidenAidenIdStepsStepIdDelete) | **DELETE** /api/v1/aiden/{aiden_id}/steps/{step_id} | Delete Step
*Askaiden.AidenApi* | [**getApiV1AidenAidenIdGet**](docs/AidenApi.md#getApiV1AidenAidenIdGet) | **GET** /api/v1/aiden/{aiden_id} | Get
*Askaiden.AidenApi* | [**invokeApiV1AidenAidenIdInvokePost**](docs/AidenApi.md#invokeApiV1AidenAidenIdInvokePost) | **POST** /api/v1/aiden/{aiden_id}/invoke | Invoke
*Askaiden.AidenApi* | [**listApiV1AidenGet**](docs/AidenApi.md#listApiV1AidenGet) | **GET** /api/v1/aiden | List
*Askaiden.AidenApi* | [**listStepsApiV1AidenAidenIdStepsGet**](docs/AidenApi.md#listStepsApiV1AidenAidenIdStepsGet) | **GET** /api/v1/aiden/{aiden_id}/steps | List Steps
*Askaiden.AidenApi* | [**updateApiV1AidenAidenIdPatch**](docs/AidenApi.md#updateApiV1AidenAidenIdPatch) | **PATCH** /api/v1/aiden/{aiden_id} | Update
*Askaiden.ConversationsApi* | [**createApiV1ConversationsPost**](docs/ConversationsApi.md#createApiV1ConversationsPost) | **POST** /api/v1/conversations | Create
*Askaiden.ConversationsApi* | [**deleteApiV1ConversationsConversationIdDelete**](docs/ConversationsApi.md#deleteApiV1ConversationsConversationIdDelete) | **DELETE** /api/v1/conversations/{conversationId} | Delete
*Askaiden.ConversationsApi* | [**listApiV1ConversationsConversationIdMessagesGet**](docs/ConversationsApi.md#listApiV1ConversationsConversationIdMessagesGet) | **GET** /api/v1/conversations/{conversationId}/messages | List
*Askaiden.ConversationsApi* | [**listApiV1ConversationsGet**](docs/ConversationsApi.md#listApiV1ConversationsGet) | **GET** /api/v1/conversations | List
*Askaiden.ConversationsApi* | [**updateApiV1ConversationsConversationIdPatch**](docs/ConversationsApi.md#updateApiV1ConversationsConversationIdPatch) | **PATCH** /api/v1/conversations/{conversationId} | Update
*Askaiden.DatasourceApi* | [**createApiV1DatasourcesPost**](docs/DatasourceApi.md#createApiV1DatasourcesPost) | **POST** /api/v1/datasources | Create
*Askaiden.DatasourceApi* | [**deleteApiV1DatasourcesDatasourceIdDelete**](docs/DatasourceApi.md#deleteApiV1DatasourcesDatasourceIdDelete) | **DELETE** /api/v1/datasources/{datasource_id} | Delete
*Askaiden.DatasourceApi* | [**getApiV1DatasourcesDatasourceIdGet**](docs/DatasourceApi.md#getApiV1DatasourcesDatasourceIdGet) | **GET** /api/v1/datasources/{datasource_id} | Get
*Askaiden.DatasourceApi* | [**listApiV1DatasourcesGet**](docs/DatasourceApi.md#listApiV1DatasourcesGet) | **GET** /api/v1/datasources | List
*Askaiden.DatasourceApi* | [**updateApiV1DatasourcesDatasourceIdPatch**](docs/DatasourceApi.md#updateApiV1DatasourcesDatasourceIdPatch) | **PATCH** /api/v1/datasources/{datasource_id} | Update
*Askaiden.SkillsApi* | [**addDatasourceApiV1SkillsSkillIdDatasourcesPost**](docs/SkillsApi.md#addDatasourceApiV1SkillsSkillIdDatasourcesPost) | **POST** /api/v1/skills/{skill_id}/datasources | Add Datasource
*Askaiden.SkillsApi* | [**addToolApiV1SkillsSkillIdToolsPost**](docs/SkillsApi.md#addToolApiV1SkillsSkillIdToolsPost) | **POST** /api/v1/skills/{skill_id}/tools | Add Tool
*Askaiden.SkillsApi* | [**createApiV1SkillsPost**](docs/SkillsApi.md#createApiV1SkillsPost) | **POST** /api/v1/skills | Create
*Askaiden.SkillsApi* | [**deleteApiV1SkillsSkillIdDelete**](docs/SkillsApi.md#deleteApiV1SkillsSkillIdDelete) | **DELETE** /api/v1/skills/{skill_id} | Delete
*Askaiden.SkillsApi* | [**getApiV1SkillsSkillIdGet**](docs/SkillsApi.md#getApiV1SkillsSkillIdGet) | **GET** /api/v1/skills/{skill_id} | Get
*Askaiden.SkillsApi* | [**invokeApiV1SkillsSkillIdInvokePost**](docs/SkillsApi.md#invokeApiV1SkillsSkillIdInvokePost) | **POST** /api/v1/skills/{skill_id}/invoke | Invoke
*Askaiden.SkillsApi* | [**listApiV1SkillsGet**](docs/SkillsApi.md#listApiV1SkillsGet) | **GET** /api/v1/skills | List
*Askaiden.SkillsApi* | [**listDatasourcesApiV1SkillsSkillIdDatasourcesGet**](docs/SkillsApi.md#listDatasourcesApiV1SkillsSkillIdDatasourcesGet) | **GET** /api/v1/skills/{skill_id}/datasources | List Datasources
*Askaiden.SkillsApi* | [**listRunsApiV1SkillsSkillIdRunsGet**](docs/SkillsApi.md#listRunsApiV1SkillsSkillIdRunsGet) | **GET** /api/v1/skills/{skill_id}/runs | List Runs
*Askaiden.SkillsApi* | [**listToolsApiV1SkillsSkillIdToolsGet**](docs/SkillsApi.md#listToolsApiV1SkillsSkillIdToolsGet) | **GET** /api/v1/skills/{skill_id}/tools | List Tools
*Askaiden.SkillsApi* | [**removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete**](docs/SkillsApi.md#removeDatasourceApiV1SkillsSkillIdDatasourcesDatasourceIdDelete) | **DELETE** /api/v1/skills/{skill_id}/datasources/{datasource_id} | Remove Datasource
*Askaiden.SkillsApi* | [**removeToolApiV1SkillsSkillIdToolsToolIdDelete**](docs/SkillsApi.md#removeToolApiV1SkillsSkillIdToolsToolIdDelete) | **DELETE** /api/v1/skills/{skill_id}/tools/{tool_id} | Remove Tool
*Askaiden.SkillsApi* | [**updateApiV1SkillsSkillIdPatch**](docs/SkillsApi.md#updateApiV1SkillsSkillIdPatch) | **PATCH** /api/v1/skills/{skill_id} | Update
*Askaiden.ToolApi* | [**createApiV1ToolsPost**](docs/ToolApi.md#createApiV1ToolsPost) | **POST** /api/v1/tools | Create
*Askaiden.ToolApi* | [**deleteApiV1ToolsToolIdDelete**](docs/ToolApi.md#deleteApiV1ToolsToolIdDelete) | **DELETE** /api/v1/tools/{tool_id} | Delete
*Askaiden.ToolApi* | [**getApiV1ToolsToolIdGet**](docs/ToolApi.md#getApiV1ToolsToolIdGet) | **GET** /api/v1/tools/{tool_id} | Get
*Askaiden.ToolApi* | [**listApiV1ToolsGet**](docs/ToolApi.md#listApiV1ToolsGet) | **GET** /api/v1/tools | List
*Askaiden.ToolApi* | [**updateApiV1ToolsToolIdPatch**](docs/ToolApi.md#updateApiV1ToolsToolIdPatch) | **PATCH** /api/v1/tools/{tool_id} | Update
*Askaiden.UsersApi* | [**createApiV1UserPost**](docs/UsersApi.md#createApiV1UserPost) | **POST** /api/v1/user | Create
*Askaiden.UsersApi* | [**deleteApiV1UserDelete**](docs/UsersApi.md#deleteApiV1UserDelete) | **DELETE** /api/v1/user | Delete
*Askaiden.UsersApi* | [**getApiV1UserGet**](docs/UsersApi.md#getApiV1UserGet) | **GET** /api/v1/user | Get
*Askaiden.UsersApi* | [**updateApiV1UserPatch**](docs/UsersApi.md#updateApiV1UserPatch) | **PATCH** /api/v1/user | Update

## Documentation for Models

 - [Askaiden.AidenInvoke](docs/AidenInvoke.md)
 - [Askaiden.AidenList](docs/AidenList.md)
 - [Askaiden.AnyOfValidationErrorLocItems](docs/AnyOfValidationErrorLocItems.md)
 - [Askaiden.AppModelsRequestAiden](docs/AppModelsRequestAiden.md)
 - [Askaiden.AppModelsRequestAidenStep](docs/AppModelsRequestAidenStep.md)
 - [Askaiden.AppModelsRequestDatasource](docs/AppModelsRequestDatasource.md)
 - [Askaiden.AppModelsRequestSkill](docs/AppModelsRequestSkill.md)
 - [Askaiden.AppModelsRequestSkillDatasource](docs/AppModelsRequestSkillDatasource.md)
 - [Askaiden.AppModelsRequestSkillInvoke](docs/AppModelsRequestSkillInvoke.md)
 - [Askaiden.AppModelsRequestSkillTool](docs/AppModelsRequestSkillTool.md)
 - [Askaiden.AppModelsRequestTool](docs/AppModelsRequestTool.md)
 - [Askaiden.AppModelsRequestUser](docs/AppModelsRequestUser.md)
 - [Askaiden.AppModelsResponseAiden](docs/AppModelsResponseAiden.md)
 - [Askaiden.AppModelsResponseDatasource](docs/AppModelsResponseDatasource.md)
 - [Askaiden.AppModelsResponseSkill](docs/AppModelsResponseSkill.md)
 - [Askaiden.AppModelsResponseSkillInvoke](docs/AppModelsResponseSkillInvoke.md)
 - [Askaiden.AppModelsResponseTool](docs/AppModelsResponseTool.md)
 - [Askaiden.AppModelsResponseUser](docs/AppModelsResponseUser.md)
 - [Askaiden.Conversation](docs/Conversation.md)
 - [Askaiden.ConversationCreation](docs/ConversationCreation.md)
 - [Askaiden.ConversationDefinition](docs/ConversationDefinition.md)
 - [Askaiden.DatasourceList](docs/DatasourceList.md)
 - [Askaiden.DatasourceStatus](docs/DatasourceStatus.md)
 - [Askaiden.DatasourceType](docs/DatasourceType.md)
 - [Askaiden.HTTPValidationError](docs/HTTPValidationError.md)
 - [Askaiden.Language](docs/Language.md)
 - [Askaiden.Memory](docs/Memory.md)
 - [Askaiden.PrismaModelsAiden](docs/PrismaModelsAiden.md)
 - [Askaiden.PrismaModelsAidenStep](docs/PrismaModelsAidenStep.md)
 - [Askaiden.PrismaModelsDatasource](docs/PrismaModelsDatasource.md)
 - [Askaiden.PrismaModelsSkill](docs/PrismaModelsSkill.md)
 - [Askaiden.PrismaModelsSkillDatasource](docs/PrismaModelsSkillDatasource.md)
 - [Askaiden.PrismaModelsSkillTool](docs/PrismaModelsSkillTool.md)
 - [Askaiden.PrismaModelsTool](docs/PrismaModelsTool.md)
 - [Askaiden.PrismaModelsUser](docs/PrismaModelsUser.md)
 - [Askaiden.SkillDatasosurceList](docs/SkillDatasosurceList.md)
 - [Askaiden.SkillList](docs/SkillList.md)
 - [Askaiden.SkillRunList](docs/SkillRunList.md)
 - [Askaiden.SkillToolList](docs/SkillToolList.md)
 - [Askaiden.ToolList](docs/ToolList.md)
 - [Askaiden.ToolType](docs/ToolType.md)
 - [Askaiden.UserType](docs/UserType.md)
 - [Askaiden.ValidationError](docs/ValidationError.md)

## Documentation for Authorization


### HTTPBearer


