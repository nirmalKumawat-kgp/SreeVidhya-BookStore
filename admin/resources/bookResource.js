const { Book } = require("../../models");
const AdminJS = require("adminjs");
const path = require("path");
const fs = require("fs");
const mv = require("mv");
module.exports = {
  resource: Book,
  options: {
    properties: {
      id: {
        isDisabled: true,
        isVisible: {
          show: true,
          edit: false,
          list: false,
          filter: false,
        },
      },
      bookImage: {
        isVisible: {
          edit: false,
          show: true,
          filter: false,
          list: true,
          new: false,
        },
        components: {
          list: AdminJS.bundle("../components/bookImage.component.tsx"),
          show: AdminJS.bundle("../components/bookImage.component.tsx"),
        },
      },
      quantity: {
        type: "number",
      },
      uploadPhoto: {
        isVisible: {
          edit: true,
          show: false,
          filter: false,
          list: false,
          new: true,
        },
        position: 102,
        components: {
          edit: AdminJS.bundle("../components/upload.component.tsx"),
          new: AdminJS.bundle("../components/upload.component.tsx"),
        },
      },
      createdAt: {
        isVisible: { show: true, edit: false, list: false, filter: true },
      },
      updatedAt: {
        isVisible: { show: true, edit: false, list: false, filter: true },
      },
    },
    actions: {
      new: {
        before: async (request, context) => {
          if (request.method === "post") {
            const { uploadPhoto, ...otherParams } = request.payload;

            context.uploadPhoto = uploadPhoto;
            return {
              ...request,
              payload: otherParams,
            };
          }
          return request;
        },
        after: async (response, request, context) => {
          const { record, uploadPhoto } = context;

          if (record.isValid() && uploadPhoto) {
            const filePath = path.join(
              "uploads",
              record.id().toString(),
              uploadPhoto.name
            );
            await fs.promises.mkdir(path.dirname(filePath), {
              recursive: true,
            });
            await mv(uploadPhoto.path, filePath, function (err) {
              console.log(err);
            });

            await record.update({ bookImage: `/${filePath}` });
          }
          return response;
        },
      },
      edit: {
        before: async (request, context) => {
          if (request.method === "post") {
            const { uploadPhoto, ...otherParams } = request.payload;

            context.uploadPhoto = uploadPhoto;
            return {
              ...request,
              payload: otherParams,
            };
          }
          return request;
        },
        after: async (response, request, context) => {
          const { record, uploadPhoto } = context;

          if (record.isValid() && uploadPhoto) {
            const filePath = path.join(
              "uploads",
              record.id().toString(),
              uploadPhoto.name
            );
            await fs.promises.mkdir(path.dirname(filePath), {
              recursive: true,
            });
            await mv(uploadPhoto.path, filePath, function (err) {
              console.log(err);
            });

            await record.update({ bookImage: `/${filePath}` });
          }
          return response;
        },
      },
    },
  },
};
