import re

def transform_file(fname):
    with open(fname, encoding='utf-8') as f:
        lines = f.readlines()

    result = []
    i = 0
    changed = 0
    while i < len(lines):
        line = lines[i]
        stripped_next = lines[i+1].strip() if i+1 < len(lines) else ''

        # Pattern: class="..." on one line, style="height: 4rem..." on next line
        if line.rstrip().endswith('"') and stripped_next.startswith('style="height: 4rem'):
            style_line = lines[i+1]
            m = re.search(r'filter: brightness\(([0-9.]+)\)', style_line)
            if m:
                brightness = m.group(1)
                new_class_line = line.rstrip()[:-1] + ' swatch-preview"\n'
                indent = len(style_line) - len(style_line.lstrip())
                new_style_line = ' ' * indent + 'style="--swatch-brightness: ' + brightness + '"\n'
                result.append(new_class_line)
                result.append(new_style_line)
            else:
                new_class_line = line.rstrip()[:-1] + ' swatch-preview"\n'
                result.append(new_class_line)
            i += 2
            changed += 1
            continue

        # style="min-height: 150px"
        if 'style="min-height: 150px"' in line:
            result.append(line.replace('style="min-height: 150px"', 'class="min-h-36"'))
            i += 1
            changed += 1
            continue

        # style="min-width: 100px"
        if 'style="min-width: 100px"' in line:
            result.append(line.replace('style="min-width: 100px"', 'class="min-w-24"'))
            i += 1
            changed += 1
            continue

        # bar-chart height: 120px
        if 'class="bar-chart mb-6" style="height: 120px"' in line:
            result.append(line.replace(
                'class="bar-chart mb-6" style="height: 120px"',
                'class="bar-chart bar-chart-sm mb-6"'
            ))
            i += 1
            changed += 1
            continue

        # text-decoration:none (redundant on .card elements)
        if ' style="text-decoration:none;"' in line:
            result.append(line.replace(' style="text-decoration:none;"', ''))
            i += 1
            changed += 1
            continue

        result.append(line)
        i += 1

    with open(fname, 'w', encoding='utf-8') as f:
        f.writelines(result)

    print(fname + ': ' + str(changed) + ' replacements')

transform_file('docs/public/index.html')
transform_file('docs/public/index-ja.html')
