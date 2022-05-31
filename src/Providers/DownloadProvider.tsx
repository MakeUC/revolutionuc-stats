import { createContext, FC, ReactNode, useCallback, useContext } from 'react';

type DownloadFunction = (elementId: string, imageName: string) => void;

export type DownloadContext = {
  download: DownloadFunction;
}

export type DownloadProviderProps = {
  children: ReactNode;
}

const context = createContext<DownloadContext>({ download() {} });

export const DownloadProvider: FC<DownloadProviderProps> = ({ children }) => {
  const download: DownloadFunction = useCallback((elementId, imageName) => {
    const downloadLink = document.createElement(`a`);
    downloadLink.setAttribute(`download`, `${imageName}.png`);
    const canvas = document.getElementById(elementId) as HTMLCanvasElement;
    const dataURL = canvas.toDataURL(`image/png`);
    const url = dataURL.replace(/^data:image\/png/,`data:application/octet-stream`);
    downloadLink.setAttribute(`href`, url);
    downloadLink.click();
  }, []);

  return <context.Provider value={{ download }}>{children}</context.Provider>
};

export const useDownloadCanvas = () => useContext(context);