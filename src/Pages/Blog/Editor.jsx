import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ImageUploadEditor = () => {
  const [content, setContent] = useState("<p>Start writing here...</p>");

  // Custom upload adapter
  function UploadAdapter(loader) {
    this.loader = loader;
  }

  UploadAdapter.prototype.upload = function () {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = function () {
            resolve({
              default: reader.result,
            });
          };

          reader.onerror = function (error) {
            reject(error);
          };

          reader.onabort = function () {
            reject(new Error("Image upload aborted"));
          };

          reader.readAsDataURL(file);
        })
    );
  };

  // Plugin to add our custom upload adapter
  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new UploadAdapter(loader);
    };
  }

  return (
    <div className="editor-container">
      <h2>Editor with Image Upload</h2>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        config={{
          extraPlugins: [MyCustomUploadAdapterPlugin],
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "imageUpload",
              "blockQuote",
              "undo",
              "redo",
            ],
          },
          image: {
            toolbar: [
              "imageTextAlternative",
              "toggleImageCaption",
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
              "linkImage",
            ],
            styles: ["full", "side", "alignLeft", "alignRight", "alignCenter"],
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
              },
              {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
              },
            ],
          },
        }}
      />
      <div className="preview">
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default ImageUploadEditor;
