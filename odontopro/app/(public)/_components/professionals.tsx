import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import fotoImg from '../../../public/foto1.png';

export function Profissionals() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg-px-8">
                <h2 className="text-3xl text-center mb-12 font-bold">
                    Clínicas disponíveis
                </h2>

                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    
                    <Card>
                        <CardContent>
                            <div>
                                <div className="relative h-48">
                                    <Image 
                                      src={fotoImg}
                                      alt="foto da clinica"
                                      fill
                                      className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3>
                                            Clínica centro
                                        </h3>
                                        <p>
                                            Rua x, centro, campo Grande - MS
                                        </p>
                                    </div>
                                </div>

                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </section>
    )
}