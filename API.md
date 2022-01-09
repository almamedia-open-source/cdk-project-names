# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### NameProps <a name="@almamedia-open-source/cdk-project-resource-name.NameProps" id="almamediaopensourcecdkprojectresourcenamenameprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NameProps } from '@almamedia-open-source/cdk-project-resource-name'

const nameProps: NameProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`maxLength`](#almamediaopensourcecdkprojectresourcenamenamepropspropertymaxlength) | `number` | *No description.* |
| [`trim`](#almamediaopensourcecdkprojectresourcenamenamepropspropertytrim) | `boolean` | *No description.* |

---

##### `maxLength`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.NameProps.property.maxLength" id="almamediaopensourcecdkprojectresourcenamenamepropspropertymaxlength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* `number`

---

##### `trim`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.NameProps.property.trim" id="almamediaopensourcecdkprojectresourcenamenamepropspropertytrim"></a>

```typescript
public readonly trim: boolean;
```

- *Type:* `boolean`

---

## Classes <a name="Classes" id="classes"></a>

### Name <a name="@almamedia-open-source/cdk-project-resource-name.Name" id="almamediaopensourcecdkprojectresourcenamename"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-resource-name.Name.Initializer" id="almamediaopensourcecdkprojectresourcenamenameinitializer"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-resource-name'

new Name()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkprojectresourcenamenameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkprojectresourcenamenameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkprojectresourcenamenamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-project-resource-name.Name.globally" id="almamediaopensourcecdkprojectresourcenamenameglobally"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-resource-name'

Name.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.scope" id="almamediaopensourcecdkprojectresourcenamenameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.baseName" id="almamediaopensourcecdkprojectresourcenamenameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.props" id="almamediaopensourcecdkprojectresourcenamenameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-project-resource-name.Name.it" id="almamediaopensourcecdkprojectresourcenamenameit"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-resource-name'

Name.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.scope" id="almamediaopensourcecdkprojectresourcenamenameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.baseName" id="almamediaopensourcecdkprojectresourcenamenameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.props" id="almamediaopensourcecdkprojectresourcenamenameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-project-resource-name.Name.withProject" id="almamediaopensourcecdkprojectresourcenamenamewithproject"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-project-resource-name'

Name.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.scope" id="almamediaopensourcecdkprojectresourcenamenameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.baseName" id="almamediaopensourcecdkprojectresourcenamenameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.Name.parameter.props" id="almamediaopensourcecdkprojectresourcenamenameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---



### PathName <a name="@almamedia-open-source/cdk-project-resource-name.PathName" id="almamediaopensourcecdkprojectresourcenamepathname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-resource-name.PathName.Initializer" id="almamediaopensourcecdkprojectresourcenamepathnameinitializer"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-resource-name'

new PathName()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkprojectresourcenamepathnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkprojectresourcenamepathnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkprojectresourcenamepathnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-project-resource-name.PathName.globally" id="almamediaopensourcecdkprojectresourcenamepathnameglobally"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-resource-name'

PathName.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.scope" id="almamediaopensourcecdkprojectresourcenamepathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.baseName" id="almamediaopensourcecdkprojectresourcenamepathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.props" id="almamediaopensourcecdkprojectresourcenamepathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-project-resource-name.PathName.it" id="almamediaopensourcecdkprojectresourcenamepathnameit"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-resource-name'

PathName.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.scope" id="almamediaopensourcecdkprojectresourcenamepathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.baseName" id="almamediaopensourcecdkprojectresourcenamepathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.props" id="almamediaopensourcecdkprojectresourcenamepathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-project-resource-name.PathName.withProject" id="almamediaopensourcecdkprojectresourcenamepathnamewithproject"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-project-resource-name'

PathName.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.scope" id="almamediaopensourcecdkprojectresourcenamepathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.baseName" id="almamediaopensourcecdkprojectresourcenamepathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.PathName.parameter.props" id="almamediaopensourcecdkprojectresourcenamepathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---



### UrlName <a name="@almamedia-open-source/cdk-project-resource-name.UrlName" id="almamediaopensourcecdkprojectresourcenameurlname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.Initializer" id="almamediaopensourcecdkprojectresourcenameurlnameinitializer"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-resource-name'

new UrlName()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkprojectresourcenameurlnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkprojectresourcenameurlnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkprojectresourcenameurlnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.globally" id="almamediaopensourcecdkprojectresourcenameurlnameglobally"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-resource-name'

UrlName.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.scope" id="almamediaopensourcecdkprojectresourcenameurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.baseName" id="almamediaopensourcecdkprojectresourcenameurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.props" id="almamediaopensourcecdkprojectresourcenameurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.it" id="almamediaopensourcecdkprojectresourcenameurlnameit"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-resource-name'

UrlName.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.scope" id="almamediaopensourcecdkprojectresourcenameurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.baseName" id="almamediaopensourcecdkprojectresourcenameurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.props" id="almamediaopensourcecdkprojectresourcenameurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.withProject" id="almamediaopensourcecdkprojectresourcenameurlnamewithproject"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-project-resource-name'

UrlName.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.scope" id="almamediaopensourcecdkprojectresourcenameurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.baseName" id="almamediaopensourcecdkprojectresourcenameurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-resource-name.UrlName.parameter.props" id="almamediaopensourcecdkprojectresourcenameurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-resource-name.NameProps`](#@almamedia-open-source/cdk-project-resource-name.NameProps)

---




