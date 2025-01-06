import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import FormWish from "./FormWish";
import { supabase } from "@/main";
import { motion } from "motion/react";

type Data = {
  id: number;
  nama: string;
  message: string;
  created_at: string;
};

const Wishes = () => {
  const [datas, setDatas] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterData, setFilterData] = useState<Data[]>([]);

  const getMessages = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) {
      setDatas(data);
    }
  };

  useEffect(() => {
    const newData = datas.filter(
      (_, index) => index >= currentIndex && index < currentIndex + 4,
    );
    setFilterData(newData);
  }, [datas]);

  const Next = () => {
    const nextPage = currentIndex + 4;
    const newData = datas.filter(
      (_, index) => index >= nextPage && index < nextPage + 4,
    );
    if (newData.length === 0) return;
    setFilterData(newData);
    setCurrentPage(currentPage + 1);
    setCurrentIndex(nextPage);
    // const { data: wishes } = await supabase
    //   .from("wishes")
    //   .select("*")
    //   .range(nextPage, nextPage + 3);
    // if (wishes) {
    //   setDatas(wishes);
    //   setCurrentPage(currentPage + 1);
    //   setCurrentIndex(nextPage);
    // }
  };

  const Prev = () => {
    if (currentPage === 1) return;
    const prevPage = currentIndex - 4;
    const newData = datas.filter(
      (_, index) => index >= prevPage && index < currentIndex,
    );
    setFilterData(newData);
    setCurrentPage(currentPage - 1);
    setCurrentIndex(prevPage);
    // const { data: wishes } = await supabase
    //   .from("wishes")
    //   .select("*")
    //   .range(prevPage, prevPage + 3);
    // if (wishes) {
    //   setDatas(wishes);
    //   setCurrentPage(currentPage - 1);
    //   setCurrentIndex(prevPage);
    // }
  };

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("realtime message")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "wishes" },
        (payload) => {
          const newData = payload.new as Data;
          setDatas((prev) => [newData, ...prev]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="mt-16 mb-32 p-2">
      <h1 className="text-3xl text-center">Wishes</h1>
      <p className="text-center">
        Berikan ucapan harapan dan do'a kepada kedua mempelai
      </p>
      <div className="space-y-2">
        <FormWish />
        {filterData.map((data) => {
          return (
            <motion.div
              key={data.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border border-1 rounded-xl p-2"
            >
              <b>{data.nama}</b>
              <p>{data.message}</p>
            </motion.div>
          );
        })}
        <div className="flex gap-2">
          <Button onClick={Prev} variant={"secondary"}>
            Prev
          </Button>
          <Button onClick={Next} variant={"secondary"}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
