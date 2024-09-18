'use client'

import { useState } from "react"
import { Box, Button, Flex, Heading, Text, Textarea, useToast, Progress, Switch, FormLabel, useColorMode } from "@chakra-ui/react"
import { AlertCircle, Edit3, Type, Copy, Moon, Sun } from "lucide-react"
// import { diffChars } from 'diff'

export default function EnhancedAITextEditor() {
  const [originalText, setOriginalText] = useState("")
  const [correctedText, setCorrectedText] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [progress, setProgress] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast()
  const maxCharLimit = 1000

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (newText.length <= maxCharLimit) {
      setOriginalText(newText)
    } else {
      toast({
        title: `文字数制限（${maxCharLimit}文字）に達しました！`,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleAICheck = () => {
    setIsChecking(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setIsChecking(false)
          // 実際のAI校正をシミュレート
          const aiCorrected = simulateAICorrection(originalText)
          setCorrectedText(aiCorrected)
          return 100
        }
        return prevProgress + 10
      })
    }, 200)
  }

  const handleCopyOriginal = () => copyToClipboard(originalText, "元のテキスト")
  const handleCopyCorrected = () => copyToClipboard(correctedText, "校正済みテキスト")

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: `${type}をコピーしました！`,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }, () => {
      toast({
        title: `${type}のコピーに失敗しました。`,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    })
  }

  const simulateAICorrection = (text: string) => {
    // この関数は実際のAI校正をシミュレートします
    // 実際の実装では、AIサービスのAPIを呼び出すなどの処理を行います
    return text.replace(/です。/g, "であります。").replace(/ます。/g, "ございます。")
  }

  const getWordCount = (str: string) => {
    const englishWords = str.match(/[a-zA-Z]+/g) || []
    const japaneseWords = str.match(/[一-龯々]+|[ぁ-ゔ]+|[ァ-ヴー]+|[a-zA-Z]+|[ａ-ｚＡ-Ｚ]+|[0-9]+|[０-９]+/g) || []
    return englishWords.length + japaneseWords.length
  }

  const getLineCount = (str: string) => {
    return str.split(/\r\n|\r|\n/).filter(line => line.trim() !== '').length
  }

  const getColorForCharCount = (count: number) => {
    if (count < maxCharLimit * 0.5) return "green.500"
    if (count < maxCharLimit * 0.8) return "blue.500"
    return "red.500"
  }

  // const renderDiff = () => {
  //   const diff = diffChars(originalText, correctedText)
  //   return diff.map((part, index) => {
  //     const color = part.added ? 'green.600' :
  //       part.removed ? 'red.600' : 'gray.700'
  //     return <Text as="span" key={index} color={color}>{part.value}</Text>
  //   })
  // }

  return (
    <Box className={colorMode === 'dark' ? 'dark' : ''} maxW="4xl" mx="auto" bgGradient="linear(to-br, blue.50, indigo.100)" shadow="lg" p={4} borderRadius="lg">
      <Box textAlign="center" mb={4}>
        <Heading as="h1" size="xl" color="indigo.700">AI文章校正エディター</Heading>
        <Text color="gray.600">プロフェッショナルな文章作成をサポート</Text>
        <Flex justify="end" align="center" mt={2}>
          <FormLabel htmlFor="dark-mode" mb="0" color="gray.600">ダークモード</FormLabel>
          <Switch id="dark-mode" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
          {colorMode === 'dark' ? <Moon size={16} color="gray.400" /> : <Sun size={16} color="yellow.500" />}
        </Flex>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex={1}>
          <FormLabel htmlFor="original-text">元のテキスト</FormLabel>
          <Textarea
            id="original-text"
            placeholder="ここにテキストを入力してください..."
            value={originalText}
            onChange={handleTextChange}
            rows={10}
            borderColor="indigo.200"
            _dark={{ borderColor: "indigo.700", bg: "gray.800", color: "white" }}
            borderRadius="lg"
            _focus={{ borderColor: "indigo.500", ring: 2, ringColor: "indigo.200", ringOpacity: 0.5 }}
            transition="all 0.3s ease-in-out"
            aria-label="元のテキスト入力エリア"
          />
          <Text position="absolute" bottom={2} right={2} fontSize="sm" color="gray.500">{originalText.length} / {maxCharLimit}</Text>
          <Button onClick={handleCopyOriginal} colorScheme="blue" w="full" mt={2} leftIcon={<Copy size={16} />}>元のテキストをコピー</Button>
        </Box>
        <Box flex={1}>
          <FormLabel htmlFor="corrected-text">校正済みテキスト</FormLabel>
          <Textarea
            id="corrected-text"
            value={correctedText}
            readOnly
            rows={10}
            borderColor="indigo.200"
            _dark={{ borderColor: "indigo.700", bg: "gray.800", color: "white" }}
            borderRadius="lg"
            _focus={{ borderColor: "indigo.500", ring: 2, ringColor: "indigo.200", ringOpacity: 0.5 }}
            transition="all 0.3s ease-in-out"
            aria-label="校正済みテキスト表示エリア"
          />
          <Button onClick={handleCopyCorrected} colorScheme="green" w="full" mt={2} leftIcon={<Copy size={16} />}>校正済みテキストをコピー</Button>
        </Box>
      </Flex>
      <Box bg="white" _dark={{ bg: "gray.800" }} p={4} borderRadius="lg" shadow="md" mt={4}>
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700">テキスト統計</Text>
          <Type size={20} color="indigo.600" />
        </Flex>
        <Flex justify="space-between">
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color={getColorForCharCount(originalText.length)}>{originalText.length}</Text>
            <Text fontSize="sm" color="gray.500">文字</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="indigo.600">{getWordCount(originalText)}</Text>
            <Text fontSize="sm" color="gray.500">単語</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="indigo.600">{getLineCount(originalText)}</Text>
            <Text fontSize="sm" color="gray.500">行</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" color="indigo.600">{Math.ceil(originalText.length / 400)}</Text>
            <Text fontSize="sm" color="gray.500">ページ (約400字/ページ)</Text>
          </Box>
        </Flex>
      </Box>
      {correctedText && (
        <Box bg="white" _dark={{ bg: "gray.800" }} p={4} borderRadius="lg" shadow="md" mt={4}>
          <Heading as="h3" size="md" color="gray.700" mb={2}>差分表示</Heading>
          {/*<Text fontSize="sm">{renderDiff()}</Text>*/}
        </Box>
      )}
      <Box mt={4}>
        <Button onClick={handleAICheck} isDisabled={isChecking || originalText.length === 0} colorScheme="indigo" w="full" leftIcon={isChecking ? <AlertCircle size={16} className="animate-spin" /> : <Edit3 size={16} />}>
          {isChecking ? "校正中..." : "AIで文章を校正"}
        </Button>
        {isChecking && <Progress value={progress} size="sm" mt={2} />}
      </Box>
    </Box>
  )
}