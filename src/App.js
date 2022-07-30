import { useEffect, useState } from "react";

// data
import { dummyData } from './js/placeholderData';

// components
import { Bin } from './components/Bin';

export default function App() {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    setInventory(dummyData);
  }, []);

  const addTo = (list, setter, newItem) => {
      setter([...list, newItem]);
  }

  const removeFrom = (list, setter, newItem) => {
    const newData = list.filter((item) => item !== newItem );
    setter([...newData]);
  }

  return (
    <div className="text-3xl">
        <Bin 
          title="Inventory"
          listFrom={ inventory }
          setListFrom={ setInventory }
          listTo={ cart }
          setListTo={ setCart }
          add={ addTo }
          remove={ removeFrom }
        />

        <hr className="border-2 border-slate-500"/>

        <Bin 
          title="Cart"
          listFrom={ cart }
          setListFrom={ setCart }
          listTo={ inventory }
          setListTo={ setInventory }
          add={ addTo }
          remove={ removeFrom }
        />
    </div>
  )
}
