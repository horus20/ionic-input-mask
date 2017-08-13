# ionic-input-mask
Simple input mask for Ionic2

Usage:
```typescript
import {DirectivesModule} from "../directives/directives.module";
```

Page html:
```html
<ion-input [(ngModel)]="username" type="tel" [mask-input]="{mask: phoneMask}"></ion-input>
```

Page class:
```typescript
phoneMask = ['+', '7', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
```

