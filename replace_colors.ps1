Get-ChildItem -Path "src" -Recurse -Include *.astro,*.css | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match '#FFF5F5|#4A4A4A|#E2B4BD|#C999A3|rgba\(226, 180, 189') {
        $content = $content -replace '#FFF5F5','#F9F7F7' -replace '#4A4A4A','#112D4E' -replace '#E2B4BD','#3F72AF' -replace '#C999A3','#2C507B' -replace 'rgba\(226, 180, 189','rgba(63, 114, 175'
        Set-Content $_.FullName $content -NoNewline
        Write-Host "Updated: $($_.Name)"
    }
}
