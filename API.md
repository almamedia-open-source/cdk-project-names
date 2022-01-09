# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### NameProps <a name="@almamedia-open-source/cdk-resource-name.NameProps" id="almamediaopensourcecdkresourcenamenameprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NameProps } from '@almamedia-open-source/cdk-resource-name'

const nameProps: NameProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`maxLength`](#almamediaopensourcecdkresourcenamenamepropspropertymaxlength) | `number` | *No description.* |
| [`trim`](#almamediaopensourcecdkresourcenamenamepropspropertytrim) | `boolean` | *No description.* |

---

##### `maxLength`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.NameProps.property.maxLength" id="almamediaopensourcecdkresourcenamenamepropspropertymaxlength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* `number`

---

##### `trim`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.NameProps.property.trim" id="almamediaopensourcecdkresourcenamenamepropspropertytrim"></a>

```typescript
public readonly trim: boolean;
```

- *Type:* `boolean`

---

## Classes <a name="Classes" id="classes"></a>

### Name <a name="@almamedia-open-source/cdk-resource-name.Name" id="almamediaopensourcecdkresourcenamename"></a>

#### Initializers <a name="@almamedia-open-source/cdk-resource-name.Name.Initializer" id="almamediaopensourcecdkresourcenamenameinitializer"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-resource-name'

new Name()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkresourcenamenameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkresourcenamenameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkresourcenamenamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-resource-name.Name.globally" id="almamediaopensourcecdkresourcenamenameglobally"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-resource-name'

Name.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.scope" id="almamediaopensourcecdkresourcenamenameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.baseName" id="almamediaopensourcecdkresourcenamenameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.props" id="almamediaopensourcecdkresourcenamenameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-resource-name.Name.it" id="almamediaopensourcecdkresourcenamenameit"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-resource-name'

Name.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.scope" id="almamediaopensourcecdkresourcenamenameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.baseName" id="almamediaopensourcecdkresourcenamenameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.props" id="almamediaopensourcecdkresourcenamenameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-resource-name.Name.withProject" id="almamediaopensourcecdkresourcenamenamewithproject"></a>

```typescript
import { Name } from '@almamedia-open-source/cdk-resource-name'

Name.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.scope" id="almamediaopensourcecdkresourcenamenameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.baseName" id="almamediaopensourcecdkresourcenamenameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.Name.parameter.props" id="almamediaopensourcecdkresourcenamenameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---



### PathName <a name="@almamedia-open-source/cdk-resource-name.PathName" id="almamediaopensourcecdkresourcenamepathname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-resource-name.PathName.Initializer" id="almamediaopensourcecdkresourcenamepathnameinitializer"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-resource-name'

new PathName()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkresourcenamepathnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkresourcenamepathnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkresourcenamepathnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-resource-name.PathName.globally" id="almamediaopensourcecdkresourcenamepathnameglobally"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-resource-name'

PathName.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.scope" id="almamediaopensourcecdkresourcenamepathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.baseName" id="almamediaopensourcecdkresourcenamepathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.props" id="almamediaopensourcecdkresourcenamepathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-resource-name.PathName.it" id="almamediaopensourcecdkresourcenamepathnameit"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-resource-name'

PathName.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.scope" id="almamediaopensourcecdkresourcenamepathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.baseName" id="almamediaopensourcecdkresourcenamepathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.props" id="almamediaopensourcecdkresourcenamepathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-resource-name.PathName.withProject" id="almamediaopensourcecdkresourcenamepathnamewithproject"></a>

```typescript
import { PathName } from '@almamedia-open-source/cdk-resource-name'

PathName.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.scope" id="almamediaopensourcecdkresourcenamepathnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.baseName" id="almamediaopensourcecdkresourcenamepathnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.PathName.parameter.props" id="almamediaopensourcecdkresourcenamepathnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---



### UrlName <a name="@almamedia-open-source/cdk-resource-name.UrlName" id="almamediaopensourcecdkresourcenameurlname"></a>

#### Initializers <a name="@almamedia-open-source/cdk-resource-name.UrlName.Initializer" id="almamediaopensourcecdkresourcenameurlnameinitializer"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-resource-name'

new UrlName()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`globally`](#almamediaopensourcecdkresourcenameurlnameglobally) | *No description.* |
| [`it`](#almamediaopensourcecdkresourcenameurlnameit) | *No description.* |
| [`withProject`](#almamediaopensourcecdkresourcenameurlnamewithproject) | *No description.* |

---

##### `globally` <a name="@almamedia-open-source/cdk-resource-name.UrlName.globally" id="almamediaopensourcecdkresourcenameurlnameglobally"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-resource-name'

UrlName.globally(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.scope" id="almamediaopensourcecdkresourcenameurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.baseName" id="almamediaopensourcecdkresourcenameurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.props" id="almamediaopensourcecdkresourcenameurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---

##### `it` <a name="@almamedia-open-source/cdk-resource-name.UrlName.it" id="almamediaopensourcecdkresourcenameurlnameit"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-resource-name'

UrlName.it(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.scope" id="almamediaopensourcecdkresourcenameurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.baseName" id="almamediaopensourcecdkresourcenameurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.props" id="almamediaopensourcecdkresourcenameurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---

##### `withProject` <a name="@almamedia-open-source/cdk-resource-name.UrlName.withProject" id="almamediaopensourcecdkresourcenameurlnamewithproject"></a>

```typescript
import { UrlName } from '@almamedia-open-source/cdk-resource-name'

UrlName.withProject(scope: Construct, baseName: string, props?: NameProps)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.scope" id="almamediaopensourcecdkresourcenameurlnameparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `baseName`<sup>Required</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.baseName" id="almamediaopensourcecdkresourcenameurlnameparameterbasename"></a>

- *Type:* `string`

---

###### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-resource-name.UrlName.parameter.props" id="almamediaopensourcecdkresourcenameurlnameparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-resource-name.NameProps`](#@almamedia-open-source/cdk-resource-name.NameProps)

---




