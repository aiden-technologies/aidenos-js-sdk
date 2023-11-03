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
api.addAidenStep(body, aidenId, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Askaiden.AidenApi* | [**addAidenStep**](docs/AidenApi.md#addAidenStep) | **POST** /api/v1/aiden/{aiden_id}/steps | Add Step
*Askaiden.AidenApi* | [**createAiden**](docs/AidenApi.md#createAiden) | **POST** /api/v1/aiden | Create
*Askaiden.AidenApi* | [**deleteAiden**](docs/AidenApi.md#deleteAiden) | **DELETE** /api/v1/aiden/{aiden_id} | Delete
*Askaiden.AidenApi* | [**deleteAidenStep**](docs/AidenApi.md#deleteAidenStep) | **DELETE** /api/v1/aiden/{aiden_id}/steps/{step_id} | Delete Step
*Askaiden.AidenApi* | [**getAiden**](docs/AidenApi.md#getAiden) | **GET** /api/v1/aiden/{aiden_id} | Get
*Askaiden.AidenApi* | [**invokeAiden**](docs/AidenApi.md#invokeAiden) | **POST** /api/v1/aiden/{aiden_id}/invoke | Invoke
*Askaiden.AidenApi* | [**listAidenSteps**](docs/AidenApi.md#listAidenSteps) | **GET** /api/v1/aiden/{aiden_id}/steps | List Steps
*Askaiden.AidenApi* | [**listAidens**](docs/AidenApi.md#listAidens) | **GET** /api/v1/aiden | List
*Askaiden.AidenApi* | [**updateAiden**](docs/AidenApi.md#updateAiden) | **PATCH** /api/v1/aiden/{aiden_id} | Update
*Askaiden.ConversationsApi* | [**createConversations**](docs/ConversationsApi.md#createConversations) | **POST** /api/v1/conversations | Create
*Askaiden.ConversationsApi* | [**deleteConversations**](docs/ConversationsApi.md#deleteConversations) | **DELETE** /api/v1/conversations/{conversationId} | Delete
*Askaiden.ConversationsApi* | [**listConversations**](docs/ConversationsApi.md#listConversations) | **GET** /api/v1/conversations | List
*Askaiden.ConversationsApi* | [**listMessages**](docs/ConversationsApi.md#listMessages) | **GET** /api/v1/conversations/{conversationId}/messages | List
*Askaiden.ConversationsApi* | [**updateConversations**](docs/ConversationsApi.md#updateConversations) | **PATCH** /api/v1/conversations/{conversationId} | Update
*Askaiden.DatasourceApi* | [**createDatasources**](docs/DatasourceApi.md#createDatasources) | **POST** /api/v1/datasources | Create
*Askaiden.DatasourceApi* | [**deleteDatasource**](docs/DatasourceApi.md#deleteDatasource) | **DELETE** /api/v1/datasources/{datasource_id} | Delete
*Askaiden.DatasourceApi* | [**getDatasource**](docs/DatasourceApi.md#getDatasource) | **GET** /api/v1/datasources/{datasource_id} | Get
*Askaiden.DatasourceApi* | [**listDatasources**](docs/DatasourceApi.md#listDatasources) | **GET** /api/v1/datasources | List
*Askaiden.DatasourceApi* | [**updateDatasource**](docs/DatasourceApi.md#updateDatasource) | **PATCH** /api/v1/datasources/{datasource_id} | Update
*Askaiden.SkillsApi* | [**addDatasource**](docs/SkillsApi.md#addDatasource) | **POST** /api/v1/skills/{skill_id}/datasources | Add Datasource
*Askaiden.SkillsApi* | [**addSkillTool**](docs/SkillsApi.md#addSkillTool) | **POST** /api/v1/skills/{skill_id}/tools | Add Tool
*Askaiden.SkillsApi* | [**createSkill**](docs/SkillsApi.md#createSkill) | **POST** /api/v1/skills | Create
*Askaiden.SkillsApi* | [**deleteSkill**](docs/SkillsApi.md#deleteSkill) | **DELETE** /api/v1/skills/{skill_id} | Delete
*Askaiden.SkillsApi* | [**getSkill**](docs/SkillsApi.md#getSkill) | **GET** /api/v1/skills/{skill_id} | Get
*Askaiden.SkillsApi* | [**invokeSkill**](docs/SkillsApi.md#invokeSkill) | **POST** /api/v1/skills/{skill_id}/invoke | Invoke
*Askaiden.SkillsApi* | [**listRuns**](docs/SkillsApi.md#listRuns) | **GET** /api/v1/skills/{skill_id}/runs | List Runs
*Askaiden.SkillsApi* | [**listSkillDatasources**](docs/SkillsApi.md#listSkillDatasources) | **GET** /api/v1/skills/{skill_id}/datasources | List Datasources
*Askaiden.SkillsApi* | [**listSkillTools**](docs/SkillsApi.md#listSkillTools) | **GET** /api/v1/skills/{skill_id}/tools | List Tools
*Askaiden.SkillsApi* | [**listSkills**](docs/SkillsApi.md#listSkills) | **GET** /api/v1/skills | List
*Askaiden.SkillsApi* | [**removeDatasource**](docs/SkillsApi.md#removeDatasource) | **DELETE** /api/v1/skills/{skill_id}/datasources/{datasource_id} | Remove Datasource
*Askaiden.SkillsApi* | [**removeTool**](docs/SkillsApi.md#removeTool) | **DELETE** /api/v1/skills/{skill_id}/tools/{tool_id} | Remove Tool
*Askaiden.SkillsApi* | [**updateSkill**](docs/SkillsApi.md#updateSkill) | **PATCH** /api/v1/skills/{skill_id} | Update
*Askaiden.ToolApi* | [**createTools**](docs/ToolApi.md#createTools) | **POST** /api/v1/tools | Create
*Askaiden.ToolApi* | [**deleteTool**](docs/ToolApi.md#deleteTool) | **DELETE** /api/v1/tools/{tool_id} | Delete
*Askaiden.ToolApi* | [**getApiV1ToolsToolIdGet**](docs/ToolApi.md#getApiV1ToolsToolIdGet) | **GET** /api/v1/tools/{tool_id} | Get
*Askaiden.ToolApi* | [**listTools**](docs/ToolApi.md#listTools) | **GET** /api/v1/tools | List
*Askaiden.ToolApi* | [**updateApiV1ToolsToolIdPatch**](docs/ToolApi.md#updateApiV1ToolsToolIdPatch) | **PATCH** /api/v1/tools/{tool_id} | Update
*Askaiden.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /api/v1/user | Create
*Askaiden.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /api/v1/user | Delete
*Askaiden.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /api/v1/user | Get
*Askaiden.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **PATCH** /api/v1/user | Update

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


