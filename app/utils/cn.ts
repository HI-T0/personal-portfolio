
export const cn = (...classes: (string | { [key: string]: boolean })[]) => {

    return classes
  
      .map(cls => {
  
        if (typeof cls === 'string') return cls;
  
        return Object.entries(cls)
  
          .filter(([_, value]) => value)
  
          .map(([key]) => key)
  
          .join(' ');
  
      })
  
      .filter(Boolean)
  
      .join(' ');
  
  };
  