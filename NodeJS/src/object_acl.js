var COS = require('cos-nodejs-sdk-v5');
var cos = new COS({
  SecretId: 'COS_SECRETID',
  SecretKey: 'COS_SECRETKEY'
});

// 设置对象 ACL
function putObjectAcl() {
  //.cssg-snippet-body-start:[put-object-acl]
  cos.putObjectAcl({
      Bucket: 'examplebucket-1250000000', /* 必须 */
      Region: 'COS_REGION',    /* 必须 */
      Key: 'exampleobject',              /* 必须 */
      ACL: 'public-read',        /* 非必须 */
  }, function(err, data) {
      console.log(err || data);
  });
  
  //.cssg-snippet-body-end
}

// 获取对象 ACL
function getObjectAcl() {
  //.cssg-snippet-body-start:[get-object-acl]
  cos.getObjectAcl({
      Bucket: 'examplebucket-1250000000', /* 必须 */
      Region: 'COS_REGION',    /* 必须 */
      Key: 'exampleobject',              /* 必须 */
  }, function(err, data) {
      console.log(err || data);
  });
  
  //.cssg-snippet-body-end
}

//.cssg-methods-pragma

describe("ObjectACL", function() {
  // 设置对象 ACL
  it("putObjectAcl", function() {
    return putObjectAcl()
  })

  // 获取对象 ACL
  it("getObjectAcl", function() {
    return getObjectAcl()
  })

  //.cssg-methods-pragma
})