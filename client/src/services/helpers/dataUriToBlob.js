const dataURItoBlob = (dataURI) => {
    if (!dataURI) {
      throw new Error("Invalid data URI");
    }
  
    const [header, data] = dataURI.split(",");
    if (!header || !data) {
      throw new Error("Invalid data URI format");
    }
  
    const isBase64 = header.indexOf("base64") >= 0;
    const byteString = isBase64 ? atob(data) : decodeURIComponent(data);
  
    const mimeString = header.split(":")[1].split(";")[0];
  
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ia], { type: mimeString });
  };
  
  export default dataURItoBlob;  