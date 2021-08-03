#!/bin/bash

repl(){
  clj \
    -X:repl deps-repl.core/process \
    :main-ns sportleafs-ui.main \
    :port 7788 \
    :host '"0.0.0.0"' \
    :repl? true \
    :nrepl? false
}

main(){
  clojure \
    -J-Dclojure.core.async.pool-size=1 \
    -J-Dclojure.compiler.direct-linking=false \
    -M -m sportleafs-ui.main
}

uberjar(){
  clj \
    -X:uberjar genie.core/process \
    :uberjar-name out/sportleafs-ui.standalone.jar \
    :main-ns sportleafs-ui.main
  mkdir -p out/jpackage-input
  mv out/sportleafs-ui.standalone.jar out/jpackage-input/
}

"$@"