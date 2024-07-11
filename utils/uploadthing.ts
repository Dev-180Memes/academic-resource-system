import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  import type { ourFileRouter } from "@/server/uploadthing";

  export const UploadButton = generateUploadButton<ourFileRouter>();
  export const UploadDropzone = generateUploadDropzone<ourFileRouter>();