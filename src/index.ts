import React from 'react';

export type CamtonoIcon = {
  svg: React.ReactElement;
  label?: string;
  category?: string;
  tags?: string[];
};

type IconGroup = Record<string, CamtonoIcon>;
let iconLibrary: Record<string, IconGroup> = {};

export const registerIcons = (groupName: string, icons: IconGroup) => {
  if (typeof icons !== 'object' || Array.isArray(icons)) {
    throw new Error('icons must be an object with named CamtonoIcon entries');
  }

  if (!iconLibrary[groupName]) {
    iconLibrary[groupName] = {};
  }

  iconLibrary[groupName] = {
    ...iconLibrary[groupName],
    ...icons
  };
};

export const getIcons = () => {
    return iconLibrary;
}