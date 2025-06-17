"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { User, Shirt, Sparkles, ImageIcon } from "lucide-react"

const prebuiltModels = [
  { id: 1, name: "Light Slim", gender: "♂️", image: "/models/light_skin_slim_m.png" },
  { id: 2, name: "Light Slim", gender: "♀️", image: "/models/light_skin_slim_f.png" },
  { id: 3, name: "Asian Tall", gender: "♀️", image: "/models/asian_tall_f.png" },
  { id: 4, name: "Dark  Tall", gender: "♂️", image: "/models/dark_skin_tall_m.png" },
  { id: 5, name: "Medium Athletic", gender: "♀️", image: "/models/medium_atheletic.png" },
  { id: 6, name: "Light Plus-Size", gender: "♀️", image: "/models/light_skin_plus_f.png" },
]

const sampleResults = [
  { id: 1, image: "/placeholder.svg?height=300&width=200", timestamp: "2 min ago" },
  { id: 2, image: "/placeholder.svg?height=300&width=200", timestamp: "5 min ago" },
  { id: 3, image: "/placeholder.svg?height=300&width=200", timestamp: "10 min ago" },
]

export default function PlaygroundPage() {
  const [clothingImage, setClothingImage] = useState<File | null>(null)
  const [modelImage, setModelImage] = useState<File | null>(null)
  const [selectedModel, setSelectedModel] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleClothingUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setClothingImage(file)
    }
  }

  const handleModelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setModelImage(file)
      setSelectedModel(null) // Clear selected model if uploading custom
    }
  }

  const handleModelSelect = (modelId: number) => {
    setSelectedModel(modelId)
    setModelImage(null) // Clear uploaded model if selecting preset
  }

  const handleGenerate = async () => {
    if (!clothingImage || (!modelImage && !selectedModel)) return

    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
  }

  const canGenerate = clothingImage && (modelImage || selectedModel)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Playground</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Virtual Try-On</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Step 1: Upload Clothing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shirt className="h-5 w-5" />🧥 Upload a Clothing Image
              </CardTitle>
              <CardDescription>
                Upload a clear, front-facing image of a single clothing item (e.g., t-shirt, dress, jacket). Please use
                a plain background if possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label htmlFor="clothing-upload" className="sr-only">
                    Upload clothing image
                  </Label>
                  <Input
                    id="clothing-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleClothingUpload}
                    className="cursor-pointer"
                  />
                </div>
                {clothingImage && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <ImageIcon className="h-4 w-4" />
                    {clothingImage.name}
                  </div>
                )}
              </div>
              {clothingImage && (
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  <span className="text-sm text-gray-500">Preview</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 2: Upload or Select Model */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />🧍 Choose a Model
              </CardTitle>
              <CardDescription>
                Upload a photo of your model, or select from our pre-built virtual models.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Option */}
              <div className="space-y-2">
                <Label htmlFor="model-upload" className="text-sm font-medium">
                  Upload a photo of your model
                </Label>
                <Input
                  id="model-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleModelUpload}
                  className="cursor-pointer"
                />
                <p className="text-xs text-gray-500">
                  Use a full-body, front-facing photo with good lighting. Plain backgrounds work best.
                </p>
                {modelImage && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <ImageIcon className="h-4 w-4" />
                    {modelImage.name}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              {/* Select Option */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Select from our pre-built virtual models</Label>
                <p className="text-xs text-gray-500">
                  Choose a model body type, skin tone, and hairstyle to preview the try-on result.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {prebuiltModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => handleModelSelect(model.id)}
                      className={`p-2 border-2 rounded-lg text-center transition-colors ${
                        selectedModel === model.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-full h-24 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
                        <Image
                          src={model.image}
                          alt={model.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs">
                        <div>
                          {model.gender} {model.name.split(" ")[0]}
                        </div>
                        <div className="text-gray-500">{model.name.split(" ").slice(1).join(" ")}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Generate Try-On */}
          <Card>
            <CardContent className="pt-6">
              <Button
                onClick={handleGenerate}
                disabled={!canGenerate || isGenerating}
                className="w-full h-12 text-lg"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />🎨 Generate Try-On Look
                  </>
                )}
              </Button>
              <p className="text-center text-sm text-gray-500 mt-2">
                Once both a clothing item and model are selected, click to generate a realistic try-on preview.
              </p>
            </CardContent>
          </Card>

          {/* Step 4: Gallery Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />🖼 Try-On Results
              </CardTitle>
              <CardDescription>
                Browse your generated try-on previews below. Click an image to zoom or download.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleResults.map((result) => (
                  <div
                    key={result.id}
                    className="group relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={result.image || "/placeholder.svg"}
                      alt={`Try-on result ${result.id}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 rounded px-2 py-1 text-xs">
                      Generated {result.timestamp}
                    </div>
                  </div>
                ))}
              </div>
              {sampleResults.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No try-on results yet. Generate your first look above!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
