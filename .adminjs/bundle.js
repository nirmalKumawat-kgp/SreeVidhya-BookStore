(function (React, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var BookImage = function BookImage(props) {
    props.onChange;
        props.property;
        var record = props.record;
    var imgSrc = record.params["bookImage"];
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, imgSrc ? /*#__PURE__*/React__default["default"].createElement("img", {
      src: imgSrc,
      width: "50px"
    }) : "noImage");
  };

  var UploadPhoto = function UploadPhoto(props) {
    var onChange = props.onChange,
        property = props.property,
        record = props.record;

    var handleDropZoneChange = function handleDropZoneChange(files) {
      onChange(property.name, files[0]);
    };

    var uploadedPhoto = record.params.bookImage;
    var photoToUpload = record.params[property.name];
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      marginBottom: "xxl"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(designSystem.DropZone, {
      onChange: handleDropZoneChange
    }), uploadedPhoto && !photoToUpload && /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
      src: uploadedPhoto
    }));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Component1 = BookImage;
  AdminJS.UserComponents.Component2 = BookImage;
  AdminJS.UserComponents.Component3 = UploadPhoto;
  AdminJS.UserComponents.Component4 = UploadPhoto;

})(React, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hZG1pbi9jb21wb25lbnRzL2Jvb2tJbWFnZS5jb21wb25lbnQudHN4IiwiLi4vYWRtaW4vY29tcG9uZW50cy91cGxvYWQuY29tcG9uZW50LnRzeCIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIExhYmVsLFxuICBEcm9wWm9uZSxcbiAgRHJvcFpvbmVQcm9wcyxcbiAgRHJvcFpvbmVJdGVtLFxufSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tIFwiYWRtaW5qc1wiO1xuY29uc3QgQm9va0ltYWdlOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaW1nU3JjID0gcmVjb3JkLnBhcmFtc1tcImJvb2tJbWFnZVwiXTtcblxuICByZXR1cm4gPEJveD57aW1nU3JjID8gPGltZyBzcmM9e2ltZ1NyY30gd2lkdGg9XCI1MHB4XCIgLz4gOiBcIm5vSW1hZ2VcIn08L0JveD47XG59O1xuZXhwb3J0IGRlZmF1bHQgQm9va0ltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBMYWJlbCxcbiAgRHJvcFpvbmUsXG4gIERyb3Bab25lUHJvcHMsXG4gIERyb3Bab25lSXRlbSxcbn0gZnJvbSBcIkBhZG1pbmpzL2Rlc2lnbi1zeXN0ZW1cIjtcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSBcImFkbWluanNcIjtcblxuY29uc3QgVXBsb2FkUGhvdG86IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVEcm9wWm9uZUNoYW5nZTogRHJvcFpvbmVQcm9wc1tcIm9uQ2hhbmdlXCJdID0gKGZpbGVzKSA9PiB7XG4gICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgZmlsZXNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IHVwbG9hZGVkUGhvdG8gPSByZWNvcmQucGFyYW1zLmJvb2tJbWFnZTtcblxuICBjb25zdCBwaG90b1RvVXBsb2FkID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5uYW1lXTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkJvdHRvbT1cInh4bFwiPlxuICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgPERyb3Bab25lIG9uQ2hhbmdlPXtoYW5kbGVEcm9wWm9uZUNoYW5nZX0gLz5cbiAgICAgIHt1cGxvYWRlZFBob3RvICYmICFwaG90b1RvVXBsb2FkICYmIDxEcm9wWm9uZUl0ZW0gc3JjPXt1cGxvYWRlZFBob3RvfSAvPn1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBVcGxvYWRQaG90bztcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IENvbXBvbmVudDEgZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy9ib29rSW1hZ2UuY29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxID0gQ29tcG9uZW50MVxuaW1wb3J0IENvbXBvbmVudDIgZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy9ib29rSW1hZ2UuY29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQyID0gQ29tcG9uZW50MlxuaW1wb3J0IENvbXBvbmVudDMgZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy91cGxvYWQuY29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQzID0gQ29tcG9uZW50M1xuaW1wb3J0IENvbXBvbmVudDQgZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy91cGxvYWQuY29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQ0ID0gQ29tcG9uZW50NCJdLCJuYW1lcyI6WyJCb29rSW1hZ2UiLCJwcm9wcyIsIm9uQ2hhbmdlIiwicHJvcGVydHkiLCJyZWNvcmQiLCJpbWdTcmMiLCJwYXJhbXMiLCJSZWFjdCIsIkJveCIsIlVwbG9hZFBob3RvIiwiaGFuZGxlRHJvcFpvbmVDaGFuZ2UiLCJmaWxlcyIsIm5hbWUiLCJ1cGxvYWRlZFBob3RvIiwiYm9va0ltYWdlIiwicGhvdG9Ub1VwbG9hZCIsIkxhYmVsIiwibGFiZWwiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIkNvbXBvbmVudDEiLCJDb21wb25lbnQyIiwiQ29tcG9uZW50MyIsIkNvbXBvbmVudDQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7RUFTQSxJQUFNQSxTQUFzQyxHQUFHLFNBQXpDQSxTQUF5QyxDQUFDQyxLQUFELEVBQVc7RUFDeEQsRUFBdUNBLEtBQXZDLENBQVFDLFFBQVIsQ0FBQTtFQUFBLE1BQXVDRCxLQUF2QyxDQUFrQkUsUUFBbEIsQ0FBQTtFQUFBLFVBQTRCQyxNQUE1QixHQUF1Q0gsS0FBdkMsQ0FBNEJHLE9BQTVCO0VBRUEsRUFBQSxJQUFNQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFdBQWQsQ0FBZixDQUFBO0VBRUEsRUFBQSxvQkFBT0MseUJBQUMsQ0FBQSxhQUFBLENBQUFDLGdCQUFELEVBQU1ILElBQUFBLEVBQUFBLE1BQU0sZ0JBQUdFLHlCQUFBLENBQUEsYUFBQSxDQUFBLEtBQUEsRUFBQTtFQUFLLElBQUEsR0FBRyxFQUFFRixNQUFWO0VBQWtCLElBQUEsS0FBSyxFQUFDLE1BQUE7S0FBM0IsQ0FBQSxHQUF1QyxTQUFuRCxDQUFQLENBQUE7RUFDRCxDQU5EOztFQ0NBLElBQU1JLFdBQXdDLEdBQUcsU0FBM0NBLFdBQTJDLENBQUNSLEtBQUQsRUFBVztFQUMxRCxFQUFBLElBQVFDLFFBQVIsR0FBdUNELEtBQXZDLENBQVFDLFFBQVI7RUFBQSxNQUFrQkMsUUFBbEIsR0FBdUNGLEtBQXZDLENBQWtCRSxRQUFsQjtFQUFBLE1BQTRCQyxNQUE1QixHQUF1Q0gsS0FBdkMsQ0FBNEJHLE1BQTVCLENBQUE7O0VBRUEsRUFBQSxJQUFNTSxvQkFBK0MsR0FBRyxTQUFsREEsb0JBQWtELENBQUNDLEtBQUQsRUFBVztNQUNqRVQsUUFBUSxDQUFDQyxRQUFRLENBQUNTLElBQVYsRUFBZ0JELEtBQUssQ0FBQyxDQUFELENBQXJCLENBQVIsQ0FBQTtLQURGLENBQUE7O0VBSUEsRUFBQSxJQUFNRSxhQUFhLEdBQUdULE1BQU0sQ0FBQ0UsTUFBUCxDQUFjUSxTQUFwQyxDQUFBO0lBRUEsSUFBTUMsYUFBYSxHQUFHWCxNQUFNLENBQUNFLE1BQVAsQ0FBY0gsUUFBUSxDQUFDUyxJQUF2QixDQUF0QixDQUFBO0VBQ0EsRUFBQSxvQkFDRUwsd0NBQUNDLGdCQUFELEVBQUE7RUFBSyxJQUFBLFlBQVksRUFBQyxLQUFBO0tBQ2hCLGVBQUFELHlCQUFBLENBQUEsYUFBQSxDQUFDUyxrQkFBRCxFQUFRYixJQUFBQSxFQUFBQSxRQUFRLENBQUNjLEtBQWpCLENBREYsZUFFRVYseUJBQUEsQ0FBQSxhQUFBLENBQUNXLHFCQUFELEVBQUE7RUFBVSxJQUFBLFFBQVEsRUFBRVIsb0JBQUFBO0VBQXBCLEdBQUEsQ0FGRixFQUdHRyxhQUFhLElBQUksQ0FBQ0UsYUFBbEIsaUJBQW1DUix3Q0FBQ1kseUJBQUQsRUFBQTtFQUFjLElBQUEsR0FBRyxFQUFFTixhQUFBQTtFQUFuQixHQUFBLENBSHRDLENBREYsQ0FBQTtFQU9ELENBakJEOztFQ1ZBTyxPQUFPLENBQUNDLGNBQVIsR0FBeUIsRUFBekIsQ0FBQTtFQUVBRCxPQUFPLENBQUNDLGNBQVIsQ0FBdUJDLFVBQXZCLEdBQW9DQSxTQUFwQyxDQUFBO0VBRUFGLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QkUsVUFBdkIsR0FBb0NBLFNBQXBDLENBQUE7RUFFQUgsT0FBTyxDQUFDQyxjQUFSLENBQXVCRyxVQUF2QixHQUFvQ0EsV0FBcEMsQ0FBQTtFQUVBSixPQUFPLENBQUNDLGNBQVIsQ0FBdUJJLFVBQXZCLEdBQW9DQSxXQUFwQzs7Ozs7OyJ9