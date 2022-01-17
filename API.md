# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### NameProps <a name="@almamedia-open-source/cdk-project-names.NameProps" id="almamediaopensourcecdkprojectnamesnameprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NameProps } from '@almamedia-open-source/cdk-project-names'

const nameProps: NameProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`maxLength`](#almamediaopensourcecdkprojectnamesnamepropspropertymaxlength) | `number` | *No description.* |
| [`trim`](#almamediaopensourcecdkprojectnamesnamepropspropertytrim) | `boolean` | *No description.* |

---

##### `maxLength`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.NameProps.property.maxLength" id="almamediaopensourcecdkprojectnamesnamepropspropertymaxlength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* `number`

---

##### `trim`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.NameProps.property.trim" id="almamediaopensourcecdkprojectnamesnamepropspropertytrim"></a>

```typescript
public readonly trim: boolean;
```

- *Type:* `boolean`

---

## Classes <a name="Classes" id="classes"></a>

### Name <a name="@almamedia-open-source/cdk-project-names.Name" id="almamediaopensourcecdkprojectnamesname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-names.Name.Initializer" id="almamediaopensourcecdkprojectnamesnameinitializer"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-names'

new Name()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkprojectnamesnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkprojectnamesnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkprojectnamesnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-project-names.Name.globally" id="almamediaopensourcecdkprojectnamesnameglobally"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-names'

Name.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.scope" id="almamediaopensourcecdkprojectnamesnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.baseName" id="almamediaopensourcecdkprojectnamesnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.props" id="almamediaopensourcecdkprojectnamesnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-project-names.Name.it" id="almamediaopensourcecdkprojectnamesnameit"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-names'

Name.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.scope" id="almamediaopensourcecdkprojectnamesnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.baseName" id="almamediaopensourcecdkprojectnamesnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.props" id="almamediaopensourcecdkprojectnamesnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-project-names.Name.withProject" id="almamediaopensourcecdkprojectnamesnamewithproject"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-names'

Name.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.scope" id="almamediaopensourcecdkprojectnamesnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.baseName" id="almamediaopensourcecdkprojectnamesnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.Name.parameter.props" id="almamediaopensourcecdkprojectnamesnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---



### PathName <a name="@almamedia-open-source/cdk-project-names.PathName" id="almamediaopensourcecdkprojectnamespathname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-names.PathName.Initializer" id="almamediaopensourcecdkprojectnamespathnameinitializer"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-names'

new PathName()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkprojectnamespathnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkprojectnamespathnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkprojectnamespathnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-project-names.PathName.globally" id="almamediaopensourcecdkprojectnamespathnameglobally"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-names'

PathName.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.scope" id="almamediaopensourcecdkprojectnamespathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.baseName" id="almamediaopensourcecdkprojectnamespathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.props" id="almamediaopensourcecdkprojectnamespathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-project-names.PathName.it" id="almamediaopensourcecdkprojectnamespathnameit"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-names'

PathName.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.scope" id="almamediaopensourcecdkprojectnamespathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.baseName" id="almamediaopensourcecdkprojectnamespathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.props" id="almamediaopensourcecdkprojectnamespathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-project-names.PathName.withProject" id="almamediaopensourcecdkprojectnamespathnamewithproject"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-names'

PathName.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.scope" id="almamediaopensourcecdkprojectnamespathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.baseName" id="almamediaopensourcecdkprojectnamespathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.PathName.parameter.props" id="almamediaopensourcecdkprojectnamespathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---



### UrlName <a name="@almamedia-open-source/cdk-project-names.UrlName" id="almamediaopensourcecdkprojectnamesurlname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-names.UrlName.Initializer" id="almamediaopensourcecdkprojectnamesurlnameinitializer"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-names'

new UrlName()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkprojectnamesurlnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkprojectnamesurlnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkprojectnamesurlnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-project-names.UrlName.globally" id="almamediaopensourcecdkprojectnamesurlnameglobally"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-names'

UrlName.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.scope" id="almamediaopensourcecdkprojectnamesurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.baseName" id="almamediaopensourcecdkprojectnamesurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.props" id="almamediaopensourcecdkprojectnamesurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-project-names.UrlName.it" id="almamediaopensourcecdkprojectnamesurlnameit"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-names'

UrlName.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.scope" id="almamediaopensourcecdkprojectnamesurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.baseName" id="almamediaopensourcecdkprojectnamesurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.props" id="almamediaopensourcecdkprojectnamesurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-project-names.UrlName.withProject" id="almamediaopensourcecdkprojectnamesurlnamewithproject"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-names'

UrlName.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.scope" id="almamediaopensourcecdkprojectnamesurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.baseName" id="almamediaopensourcecdkprojectnamesurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-names.UrlName.parameter.props" id="almamediaopensourcecdkprojectnamesurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-names.NameProps`](#@almamedia-open-source/cdk-project-names.NameProps)

---




