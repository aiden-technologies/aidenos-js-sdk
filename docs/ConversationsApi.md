# Askaiden.ConversationsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConversations**](ConversationsApi.md#createConversations) | **POST** /api/v1/conversations | Create
[**deleteConversations**](ConversationsApi.md#deleteConversations) | **DELETE** /api/v1/conversations/{conversationId} | Delete
[**listConversations**](ConversationsApi.md#listConversations) | **GET** /api/v1/conversations | List
[**listMessages**](ConversationsApi.md#listMessages) | **GET** /api/v1/conversations/{conversationId}/messages | List
[**updateConversations**](ConversationsApi.md#updateConversations) | **PATCH** /api/v1/conversations/{conversationId} | Update

<a name="createConversations"></a>
# **createConversations**
> Object createConversations(body, opts)

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
apiInstance.createConversations(body, opts, (error, data, response) => {
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

<a name="deleteConversations"></a>
# **deleteConversations**
> Object deleteConversations(conversationId)

Delete

Delete a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let conversationId = "conversationId_example"; // String | 

apiInstance.deleteConversations(conversationId, (error, data, response) => {
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

<a name="listConversations"></a>
# **listConversations**
> Object listConversations()

List

List all conversations

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
apiInstance.listConversations((error, data, response) => {
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

<a name="listMessages"></a>
# **listMessages**
> Object listMessages(conversationId)

List

List all messages from a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let conversationId = "conversationId_example"; // String | 

apiInstance.listMessages(conversationId, (error, data, response) => {
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

<a name="updateConversations"></a>
# **updateConversations**
> Object updateConversations(body, conversationId)

Update

Update a conversation

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.ConversationsApi();
let body = new Askaiden.ConversationDefinition(); // ConversationDefinition | 
let conversationId = "conversationId_example"; // String | 

apiInstance.updateConversations(body, conversationId, (error, data, response) => {
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

