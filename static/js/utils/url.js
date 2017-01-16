var url = {

  /**
   * Transfer a URL query part to a JSON object
   * @param  {string} query URL query part in 'A=X&B=Y&C=Z...' format
   * @return {object}       The key-value style for the query string
   */
  queryToJson: function(query) {
    var result = {};
    var queryArr = query.split('&');
    queryArr.forEach(function(keyValuePair) {
      var key = keyValuePair.split('=')[0],
        value = keyValuePair.split('=')[1];
      result[key] = value;
    });
    return result;
  }
};

module.exports = url;
