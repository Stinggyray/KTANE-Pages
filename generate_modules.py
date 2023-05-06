import os
import json

ktane_content_path = "C:\\Users\\sting\\Desktop\\KTANE\\KtaneContent"
module_info = {}

for filename in os.listdir(f'{ktane_content_path}\\JSON'):
    file = os.path.join(f'{ktane_content_path}\\JSON', filename)
    with open(file, 'r', encoding="utf-8-sig") as f:
        test = json.load(f)
        module_info[test["ModuleID"]] = test["Name"]

out_file = open("modules.json", "w")
json.dump(module_info, out_file, indent=4)
