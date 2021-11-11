export default function populateTemplate(title = "", linkTitle = "", link = "", message = "") {
 const foo = {
  type: "message",
  attachments: [
   {
    contentType: "application/vnd.microsoft.card.adaptive",
    contentUrl: null,
    content: {
     type: "AdaptiveCard",
     $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
     version: "1.4",
     body: [
      {
       type: "ColumnSet",
       columns: [
        {
         type: "Column",
         width: "stretch",
         items: [
          {
           type: "TextBlock",
           text: title,
           size: "Large",
           wrap: true,
           horizontalAlignment: "Left",
           height: "stretch",
           spacing: "None",
           isSubtle: false,
           weight: "Default",
           style: "heading",
           fontType: "Default",
          },
         ],
        },
        {
         type: "Column",
         width: "auto",
         items: [
          {
           type: "ActionSet",
           actions: [
            {
             type: "Action.OpenUrl",
             title: linkTitle,
             url: link,
            },
           ],
           height: "stretch",
          },
         ],
        },
       ],
      },
      {
       type: "Container",
       items: [
        {
         type: "Container",
         items: [
          {
           type: "ColumnSet",
           columns: [
            {
             type: "Column",
             width: "stretch",
             items: [
              {
               type: "TextBlock",
               text: message,
               wrap: true,
               size: "Medium",
               horizontalAlignment: "Left",
              },
             ],
            },
           ],
          },
         ],
        },
       ],
      },
     ],
    },
   },
  ],
 };

 return foo;
}
