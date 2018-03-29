<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<div class="row fotos">

<?foreach($arResult["ITEMS"] as $arItem):
$i++;
?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
<? if($i <= 40): ?>
	<div class="col-md-3 col-sm-3 col-xs-6" style="padding: 0 5px">
		<?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arItem["PREVIEW_PICTURE"])):?>
			<a id="<?=$this->GetEditAreaId($arItem['ID']);?>" data-lightbox="photogallery" href="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>">
				<div class="foto-item" style="background-image: url('<?=$arItem['PREVIEW_PICTURE']['SRC']?>');background-size: cover"></div>
			</a>
		<?endif?>
	</div>
<? endif; ?>
<?endforeach;?>

<div class="down" data-toggle="collapse" data-target="#<?=$arItem["IBLOCK_ID"];?>" style="text-align: center; cursor: pointer"><b>Больше фото <span class="glyphicon glyphicon-arrow-down"></span></b></div>
<div id="<?=$arItem["IBLOCK_ID"];?>" class="collapse">
<?foreach($arResult["ITEMS"] as $arItem):
$j++;
?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>


	<? if($j > 40): ?>
	<div class="col-md-3 col-sm-3 col-xs-6" style="padding: 0 5px">
		<?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arItem["PREVIEW_PICTURE"])):?>
			<a id="<?=$this->GetEditAreaId($arItem['ID']);?>" data-lightbox="photogallery" href="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>">
				<div class="foto-item" style="background-image: url('<?=$arItem['PREVIEW_PICTURE']['SRC']?>');background-size: cover"></div>
			</a>
		<?endif?>
	</div>
	<? endif; ?>
	<?endforeach; ?>
<div class="clearfix"></div>
<div class="up" data-toggle="collapse" data-target="#<?=$arItem["IBLOCK_ID"];?>" style="text-align: center; cursor: pointer"><b>Свернуть <span class="glyphicon glyphicon-arrow-up"></span></b></div>
</div>

</div><!-- end row -->

<script>
	$('.down').each(function(){
		$(this).click(function(){
			$(this).slideUp();
		});
	});
	$('.up').each(function(){
		$(this).click(function(){
			$(this).parent().prev().slideDown();
	  	});
	});
</script>