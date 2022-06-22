const data = {
  "traceId": "bac74aee-b9f0-4196-bd5b-817fac5cbaff",
  "code": null,
  "message": null,
  "success": true,
  "queryErrMsg": null,
  "exStack": null,
  "data": {
    "pollKey": null,
    "dsType": "mysql",
    "runtime": 51,
    "sqlAdvise": false,
    "normalResult": true,
    "performanceInfo": {
      "sqlRecords": [
        {
          "sqlStages": {
            "query": 5,
            "createConnection": 20
          },
          "sql": "SELECT ADR_T_1_.`product_type` AS T_AL9_2_, SUM(ADR_T_1_.`price`) AS T_ACF_3_ FROM `quickbi_online_demo`.`company_sales_record` AS ADR_T_1_  GROUP BY ADR_T_1_.`product_type`  LIMIT 0, 10001",
          "extraInfo": {
            "isFromCache": "false"
          },
          "cacheMoment": 1655705826550,
          "logView": null,
          "queryStartTime": 1655705826525,
          "queryEndTime": 1655705826550
        }
      ],
      "stages": {
        "beforeQuery": 27,
        "validAuthPre": 5,
        "maxCreateConnection": 20,
        "afterQuery": 8,
        "maxQuery": 5,
        "totalInServer": 60
      },
      "extraInfo": {
        "isFromDLA": false,
        "isFromAggregationIndex": false,
        "isFromPresto": false,
        "isFromCache": false,
        "isFromTableIndex": false
      },
      "traceId": "bac74aee-b9f0-4196-bd5b-817fac5cbaff",
      "cubeId": "c91c01cc-1c24-470f-81fd-2fd8ed2ccb3a",
      "reportId": null,
      "componentId": null,
      "startTimeOfServer": 1655705826498,
      "endTimeOfServer": 1655705826558,
      "supportSqlAdvise": true,
      "converted": true
    },
    "value": {
      "rows": [
        {
          "total": true,
          "subtotal": false,
          "summaryType": "normal",
          "cells": [
            null
          ],
          "groupName": null,
          "groups": null
        },
        {
          "total": false,
          "subtotal": false,
          "summaryType": null,
          "cells": [
            {
              "value": "办公用品",
              "raw": null,
              "dataType": "string",
              "id": null,
              "parentId": null,
              "hasChildren": null,
              "ranking": null,
              "props": {
                "guid": "产品类型~1x2ibw9l",
                "label": null,
                "description": null,
                "format": null,
                "hidden": null,
                "hasPermission": null,
                "dataMask": null
              }
            }
          ],
          "groupName": null,
          "groups": null
        },
        {
          "total": false,
          "subtotal": false,
          "summaryType": null,
          "cells": [
            {
              "value": "家具产品",
              "raw": null,
              "dataType": "string",
              "id": null,
              "parentId": null,
              "hasChildren": null,
              "ranking": null,
              "props": {
                "guid": "产品类型~1x2ibw9l",
                "label": null,
                "description": null,
                "format": null,
                "hidden": null,
                "hasPermission": null,
                "dataMask": null
              }
            }
          ],
          "groupName": null,
          "groups": null
        },
        {
          "total": false,
          "subtotal": false,
          "summaryType": null,
          "cells": [
            {
              "value": "技术产品",
              "raw": null,
              "dataType": "string",
              "id": null,
              "parentId": null,
              "hasChildren": null,
              "ranking": null,
              "props": {
                "guid": "产品类型~1x2ibw9l",
                "label": null,
                "description": null,
                "format": null,
                "hidden": null,
                "hasPermission": null,
                "dataMask": null
              }
            }
          ],
          "groupName": null,
          "groups": null
        }
      ],
      "columns": [
        {
          "total": false,
          "subtotal": false,
          "summaryType": null,
          "cells": [
            {
              "value": null,
              "raw": null,
              "dataType": "number",
              "id": null,
              "parentId": null,
              "hasChildren": null,
              "ranking": null,
              "props": {
                "guid": "单价~gayznpfc",
                "label": null,
                "description": null,
                "format": null,
                "hidden": null,
                "hasPermission": null,
                "dataMask": null
              }
            }
          ],
          "groupName": null,
          "groups": null
        }
      ],
      "values": [
        [
          {
            "v": "216410.58000000077"
          }
        ],
        [
          {
            "v": "45991.95000000015"
          }
        ],
        [
          {
            "v": "49741.98000000012"
          }
        ],
        [
          {
            "v": "120676.65000000052"
          }
        ]
      ],
      "page": {
        "limit": 10000,
        "offset": 0,
        "count": null
      },
      "extra": {
        "anomalyDetectionResults": [],
        "forecastResults": [],
        "summarizeResults": [],
        "trendLineResults": [],
        "description": null,
        "exceedMaxCount": false,
        "conditionalFormatResults": null
      }
    },
    "debugInfo": [
      {
        "cubeId": "c91c01cc-1c24-470f-81fd-2fd8ed2ccb3a",
        "logView": null,
        "pollKey": null,
        "sql": "SELECT ADR_T_1_.`product_type` AS T_AL9_2_, SUM(ADR_T_1_.`price`) AS T_ACF_3_ FROM `quickbi_online_demo`.`company_sales_record` AS ADR_T_1_  GROUP BY ADR_T_1_.`product_type`  LIMIT 0, 10001",
        "connectDBDuration": 20,
        "queryDuration": 5,
        "createTime": 1655705826550,
        "queryStartTime": 1655705826525,
        "queryEndTime": 1655705826550,
        "extraInfo": {
          "isFromCache": "false"
        }
      }
    ]
  },
  "querySql": null
}
export default data