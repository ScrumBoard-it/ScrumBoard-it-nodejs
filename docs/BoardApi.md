# ScrumBoardIt.BoardApi

All URIs are relative to *https://api.scrumboard-it.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBoardById**](BoardApi.md#getBoardById) | **GET** /boards/{boardId} | Find board by ID
[**getBoards**](BoardApi.md#getBoards) | **GET** /boards | List all accessible boards
[**getTasksByBoardId**](BoardApi.md#getTasksByBoardId) | **GET** /boards/{boardId}/tasks | List all tasks of a board


<a name="getBoardById"></a>
# **getBoardById**
> InlineResponse2001 getBoardById(boardId)

Find board by ID

### Example
```javascript
var ScrumBoardIt = require('scrum_board_it');
var defaultClient = ScrumBoardIt.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ScrumBoardIt.BoardApi();

var boardId = "boardId_example"; // String | ID of the board to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBoardById(boardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boardId** | **String**| ID of the board to return | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBoards"></a>
# **getBoards**
> InlineResponse200 getBoards()

List all accessible boards

### Example
```javascript
var ScrumBoardIt = require('scrum_board_it');
var defaultClient = ScrumBoardIt.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ScrumBoardIt.BoardApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBoards(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTasksByBoardId"></a>
# **getTasksByBoardId**
> InlineResponse2002 getTasksByBoardId(boardId)

List all tasks of a board

### Example
```javascript
var ScrumBoardIt = require('scrum_board_it');
var defaultClient = ScrumBoardIt.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ScrumBoardIt.BoardApi();

var boardId = "boardId_example"; // String | ID of the board's tasks


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTasksByBoardId(boardId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boardId** | **String**| ID of the board&#39;s tasks | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

