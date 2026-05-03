import re

with open('src/Components/Headers.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Clean up any python agent trace at the end
script_end = content.find('</script>')
if script_end != -1:
    content = content[:script_end + 9]

# Extract JS part
script_start = content.rfind('<script>')
if script_start != -1:
    js_part = content[script_start+8:script_end]
    html_content = content[:script_start]
else:
    js_part = ""
    html_content = content

# Fix comments
html_content = html_content.replace('< !--', '<!--').replace('-- >', '-->')
html_content = html_content.replace('`', '\\`').replace('$', '\\$')

# Split at </nav>
nav_end = html_content.find('</nav>')
if nav_end != -1:
    headers_html = html_content[:nav_end + 6]
    welcome_html = html_content[nav_end + 6:]
else:
    headers_html = html_content
    welcome_html = ""

# Write Headers.jsx
headers_code = f"""import React from 'react';
import '../css/index.css';

export default function Headers() {{
  return (
    <div dangerouslySetInnerHTML={{{{ __html: `{headers_html.strip()}` }}}} />
  );
}}
"""
with open('src/Components/Headers.jsx', 'w', encoding='utf-8') as f:
    f.write(headers_code)

# Write WelcomePage.jsx
welcome_code = f"""import React, {{ useEffect }} from 'react';
import '../css/index.css';

export default function WelcomePage() {{
  useEffect(() => {{
    const runScripts = () => {{
{js_part}
    }};
    setTimeout(runScripts, 100);
  }}, []);

  return (
    <div dangerouslySetInnerHTML={{{{ __html: `{welcome_html.strip()}` }}}} />
  );
}}
"""
with open('src/Components/WelcomePage.jsx', 'w', encoding='utf-8') as f:
    f.write(welcome_code)

print("Files fixed!")
