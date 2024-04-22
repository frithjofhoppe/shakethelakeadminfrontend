#!/bin/bash

output=""
while IFS= read -r line
do
  if [[ ! -z "$line" ]]; then
    output+="$line "
  fi
done < $1

echo $output

eval $output $2