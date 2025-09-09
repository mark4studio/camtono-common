export type CamtonoIcon = {
  slug: string;
  label: string;
  category: string;
  svg: React.FunctionComponent<any>;
  tags: string[];
  more: Record<string, any>;
};

export namespace camtono {
  export namespace customizer {
    
    type IconLibrary =  Record<string, CamtonoIcon[]>;
    let iconLibrary:IconLibrary = {};
    
    export function registerIcons(
      groupName: string,
      icons: CamtonoIcon[]
    ) {
      if (!iconLibrary[groupName]) {
        iconLibrary[groupName] = [];
      }
      iconLibrary[groupName] = iconLibrary[groupName].concat(icons);
    }

    export function getIcons() {
      return iconLibrary;
    }
  }
}