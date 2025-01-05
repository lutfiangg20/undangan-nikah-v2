import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/main";
import { FormEvent, memo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AddData = {
  nama: string;
  message: string;
  kehadiran: string;
};

const FormWish = () => {
  const [formData, setFormData] = useState<AddData>({
    nama: "",
    message: "",
    kehadiran: "",
  });

  const addMessage = async (e: FormEvent) => {
    e.preventDefault();
    await supabase.from("wishes").insert([
      {
        nama: formData.nama,
        message: formData.message,
        kehadiran: formData.kehadiran,
      },
    ]);
    setFormData({ nama: "", message: "", kehadiran: "" });
  };

  return (
    <form className="space-y-2" onSubmit={addMessage}>
      <Input
        placeholder="Nama"
        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
      />
      <Textarea
        placeholder="Ucapan"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <Select onValueChange={(e) => setFormData({ ...formData, kehadiran: e })}>
        <SelectTrigger className="">
          <SelectValue placeholder="Konfirmasi Kehadiran" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Hadir">Hadir</SelectItem>
          <SelectItem value="Tidak Hadir">Tidak Hadir</SelectItem>
          <SelectItem value="Masih Ragu">Masih Ragu</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full" variant={"secondary"}>
        Kirim
      </Button>
    </form>
  );
};

export default memo(FormWish);
