#!/usr/bin/env sh
bzt wdio.yml

curl -X GET http://bmp:9090/proxy/9091/har > build/openlmis.har

{ echo 'onInputData(' ; cat build/openlmis.har ; echo ')' ;} > build/openlmis.har.jsonp
