# Askaiden.UsersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiV1UserPost**](UsersApi.md#createApiV1UserPost) | **POST** /api/v1/user | Create
[**deleteApiV1UserDelete**](UsersApi.md#deleteApiV1UserDelete) | **DELETE** /api/v1/user | Delete
[**getApiV1UserGet**](UsersApi.md#getApiV1UserGet) | **GET** /api/v1/user | Get
[**updateApiV1UserPatch**](UsersApi.md#updateApiV1UserPatch) | **PATCH** /api/v1/user | Update

<a name="createApiV1UserPost"></a>
# **createApiV1UserPost**
> Object createApiV1UserPost(body)

Create

Create a user

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.UsersApi();
let body = new Askaiden.AppModelsRequestUser(); // AppModelsRequestUser | 

apiInstance.createApiV1UserPost(body, (error, data, response) => {
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
 **body** | [**AppModelsRequestUser**](AppModelsRequestUser.md)|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApiV1UserDelete"></a>
# **deleteApiV1UserDelete**
> Object deleteApiV1UserDelete()

Delete

Delete a User

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.UsersApi();
apiInstance.deleteApiV1UserDelete((error, data, response) => {
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

<a name="getApiV1UserGet"></a>
# **getApiV1UserGet**
> AppModelsRequestUser getApiV1UserGet()

Get

Get a user

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.UsersApi();
apiInstance.getApiV1UserGet((error, data, response) => {
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

[**AppModelsRequestUser**](AppModelsRequestUser.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateApiV1UserPatch"></a>
# **updateApiV1UserPatch**
> AppModelsResponseUser updateApiV1UserPatch(body)

Update

Update a user

### Example
```javascript
import {Askaiden} from 'askaiden';
let defaultClient = Askaiden.ApiClient.instance;


let apiInstance = new Askaiden.UsersApi();
let body = new Askaiden.AppModelsRequestUser(); // AppModelsRequestUser | 

apiInstance.updateApiV1UserPatch(body, (error, data, response) => {
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
 **body** | [**AppModelsRequestUser**](AppModelsRequestUser.md)|  | 

### Return type

[**AppModelsResponseUser**](AppModelsResponseUser.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

