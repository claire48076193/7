<script>
        function convertCurrency() {
            // 取得使用者輸入的美金金額
            var usdAmount = parseFloat(document.getElementById('usdAmount').value);
            
            // 美金兌換台幣的匯率
            var exchangeRate = 28.5; // 假設匯率為28.5台幣/美金，請根據實際匯率修改
            
            // 換算成台幣金額
            var twdAmount = usdAmount * exchangeRate;
            
            // 顯示換算後的台幣金額
            document.getElementById('twdAmount').innerText = twdAmount.toFixed(2) + ' 台幣';
        }
    </script>