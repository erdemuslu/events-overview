import { useMemo } from "react";

const useTargetData = (boxInfo, boxData, type) => {
  const data = useMemo(() => {
    if (!boxInfo || !boxData) return [];

    return boxInfo.map((item) => {
      return {
        ...item,
        ...boxData[item.type][type],
      };
    });
  }, [boxData, boxInfo, type]);

  return data;
};

export default useTargetData;
