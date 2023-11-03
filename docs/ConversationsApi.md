# Askaiden.ConversationsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiV1ConversationsPost**](ConversationsApi.md#createApiV1ConversationsPost) | **POST** /api/v1/conversations | Create
[**deleteApiV1ConversationsConversationIdDelete**](ConversationsApi.md#deleteApiV1ConversationsConversationIdDelete) | **DELETE** /api/v1/conversations/{conversationId} | Delete
[**listApiV1ConversationsConversationIdMessagesGet**](ConversationsApi.md#listApiV1ConversationsConversationIdMessagesGet) | **GET** /api/v1/conversations/{conversationId}/messages | List
[**listApiV1ConversationsGet**](ConversationsApi.md#listApiV1ConversationsGet) | **GET** /api/v1/conversations | List
[**updateApiV1ConversationsConversationIdPatch**](ConversationsApi.md#updateApiV1ConversationsConversationIdPatch) | **PATCH** /api/v1/conversations/{conversationId} | Update

<a name="createApiV1ConversationsPost"></a>
# **createApiV1ConversationsPost**
> Object createApiV1ConversationsPost(body, opts)

Create

Create a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let body = new Askaiden.ConversationCreation(); // ConversationCreation | 
let opts = { 
  'locationId': "web" // String | 
};
apiInstance.createApiV1ConversationsPost(body, opts, (error, data, response) => {
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
 **body** | [**ConversationCreation**](ConversationCreation.md)|  | 
 **locationId** | **String**|  | [optional] [default to web]

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApiV1ConversationsConversationIdDelete"></a>
# **deleteApiV1ConversationsConversationIdDelete**
> Object deleteApiV1ConversationsConversationIdDelete(conversationId)

Delete

Delete a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let conversationId = "conversationId_example"; // String | 

apiInstance.deleteApiV1ConversationsConversationIdDelete(conversationId, (error, data, response) => {
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
 **conversationId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApiV1ConversationsConversationIdMessagesGet"></a>
# **listApiV1ConversationsConversationIdMessagesGet**
> Object listApiV1ConversationsConversationIdMessagesGet(conversationId)

List

List all messages from a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let conversationId = "conversationId_example"; // String | 

apiInstance.listApiV1ConversationsConversationIdMessagesGet(conversationId, (error, data, response) => {
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
 **conversationId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApiV1ConversationsGet"></a>
# **listApiV1ConversationsGet**
> Object listApiV1ConversationsGet()

List

List all conversations

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
apiInstance.listApiV1ConversationsGet((error, data, response) => {
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

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApiV1ConversationsConversationIdPatch"></a>
# **updateApiV1ConversationsConversationIdPatch**
> Object updateApiV1ConversationsConversationIdPatch(body, conversationId)

Update

Update a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let body = new Askaiden.ConversationDefinition(); // ConversationDefinition | 
let conversationId = "conversationId_example"; // String | 

apiInstance.updateApiV1ConversationsConversationIdPatch(body, conversationId, (error, data, response) => {
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
 **body** | [**ConversationDefinition**](ConversationDefinition.md)|  | 
 **conversationId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

