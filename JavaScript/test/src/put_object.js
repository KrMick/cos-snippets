// 简单上传对象
function putObject(assert) {
  //.cssg-snippet-body-start:[put-object]
  cos.putObject({
      Bucket: 'examplebucket-1250000000', /* 必须 */
      Region: 'COS_REGION',     /* 存储桶所在地域，必须字段 */
      Key: 'exampleobject',              /* 必须 */
      StorageClass: 'STANDARD',
      Body: fileObject, // 上传文件对象
      onProgress: function(progressData) {
          console.log(JSON.stringify(progressData));
      }
  }, function(err, data) {
      console.log(err || data);
  });
  
  //.cssg-snippet-body-end
}

//.cssg-methods-pragma

test("PutObject", async function(assert) {
  // 简单上传对象
  await putObject(assert)

//.cssg-methods-pragma
})