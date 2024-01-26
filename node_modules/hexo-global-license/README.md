# hexo-global-license
---------------------

A generator for the [Hexo](https://hexo.io/) static site generator that adds a license statement to every page. It natively supports [Creative Commons v4.0](https://creativecommons.org/) or a custom license template.

[![Downloads](https://img.shields.io/npm/dm/hexo-global-license.svg)](https://www.npmjs.com/package/hexo-global-license) [![npm](https://img.shields.io/npm/v/hexo-global-license.svg)](https://www.npmjs.com/package/hexo-global-license) [![LICENSE](https://img.shields.io/npm/l/hexo-global-license.svg)](LICENSE)

## Installation

```
npm install --save hexo-global-license
```

## Usage

* Add the global license helper to your theme template
    * <%- globalLicense(config) %>
* Add settings to the Hexo configuration file
    * licenseType: Specify the type of Creative Commons license, or custom
        * by: CC Attribution
        * by-nd: CC Attribution-NoDerivatives
        * by-sa: CC Attribution-ShareAlike
        * by-nc: CC Attribution-NonCommercial
        * by-nc-nd: CC Attribution-NonCommercial-NoDerivatives
        * by-nc-sa: CC Attribution-NonCommercial-ShareAlike
        * custom: Specify your own custom license HTML
    * licenseIconSize: Specify the size of the Creative Commons image
        * normal
        * small
    * customLicense: The markup and text of a custom license statement; only 
                     needed when licenseType is set to 'custom'

### Examples

**Creative Commons**
```toml
licenseType: by-sa
licenseIconSize: normal
```

**Custom**
```toml
licenseType: custom
customLicense: <div>My custom license text.</div>
```

## License

Copyright (c) 2017, Scott Banwart. Licensed under the [MIT license](https://github.com/sbanwart/hexo-global-license/blob/master/LICENSE).
