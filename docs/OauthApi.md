# ScrumBoardIt.OauthApi

All URIs are relative to *https://api.scrumboard-it.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthorizationConfig**](OauthApi.md#getAuthorizationConfig) | **GET** /oauth/{provider}/config | Authentication public config
[**getAuthorizationToken**](OauthApi.md#getAuthorizationToken) | **GET** /oauth/{provider}/token | Authentication token bridge


<a name="getAuthorizationConfig"></a>
# **getAuthorizationConfig**
> InlineResponse2003 getAuthorizationConfig(provider)

Authentication public config

### Example
```javascript
var ScrumBoardIt = require('scrumboard-it-client');

var apiInstance = new ScrumBoardIt.OauthApi();

var provider = "provider_example"; // String | Name of the provider

apiInstance.getAuthorizationConfig(provider).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| Name of the provider | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAuthorizationToken"></a>
# **getAuthorizationToken**
> InlineResponse2004 getAuthorizationToken(provider, code)

Authentication token bridge

### Example
```javascript
var ScrumBoardIt = require('scrumboard-it-client');

var apiInstance = new ScrumBoardIt.OauthApi();

var provider = "provider_example"; // String | Name of the provider

var code = "code_example"; // String | Temporary code returned by the provider

apiInstance.getAuthorizationToken(provider, code).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| Name of the provider | 
 **code** | **String**| Temporary code returned by the provider | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

